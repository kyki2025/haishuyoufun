/**
 * 海叔有FUN - Cloudflare Worker 入口文件
 * 用于处理请求并提供静态资源
 */

import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event));
});

/**
 * 处理所有传入的请求
 * @param {FetchEvent} event
 * @returns {Response}
 */
async function handleRequest(event) {
  const url = new URL(event.request.url);
  const pathname = url.pathname;

  // 处理 www 重定向 - 将 www.haishu.fun 重定向到 haishu.fun
  if (url.hostname === 'www.haishu.fun') {
    const redirectUrl = new URL(event.request.url);
    redirectUrl.hostname = 'haishu.fun';
    return Response.redirect(redirectUrl.toString(), 301);
  }

  // 特殊处理 sitemap.xml 和 robots.txt
  if (pathname === '/sitemap.xml' || pathname === '/robots.txt') {
    try {
      const response = await getAssetFromKV(event, {
        mapRequestToAsset: req => new Request(`${url.origin}${pathname}`, req),
      });
      
      // 设置正确的 Content-Type
      const contentType = pathname === '/sitemap.xml' ? 'application/xml' : 'text/plain';
      const newResponse = new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: {
          ...response.headers,
          'Content-Type': contentType,
          'Cache-Control': 'public, max-age=3600', // 缓存1小时
        }
      });
      
      return newResponse;
    } catch (e) {
      return new Response(`File not found: ${pathname}`, { status: 404 });
    }
  }

  const options = {};

  try {
    // 使用 Cloudflare Workers Sites 获取静态资源
    const page = await getAssetFromKV(event, options);

    // 允许 headers 被缓存
    const response = new Response(page.body, page);

    response.headers.set('X-XSS-Protection', '1; mode=block');
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('X-Frame-Options', 'DENY');
    response.headers.set('Referrer-Policy', 'unsafe-url');
    
    // 为静态文件设置正确的 Content-Type
    let contentType;
    if (pathname === '/' || pathname === '/index.html') {
      contentType = 'text/html';
    } else {
      contentType = getContentType(pathname);
    }
    
    if (contentType) {
      response.headers.set('Content-Type', contentType);
    }

    return response;

  } catch (e) {
    // 只有在访问页面路由时才返回 index.html（用于 SPA 路由）
    // 排除静态文件扩展名
    const staticExtensions = ['.css', '.js', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.ico', '.woff', '.woff2', '.ttf', '.eot', '.otf', '.pdf'];
    const isStaticFile = staticExtensions.some(ext => pathname.endsWith(ext));
    
    if (isStaticFile) {
      return new Response('File not found', { status: 404 });
    }
    
    try {
      let notFoundResponse = await getAssetFromKV(event, {
        mapRequestToAsset: req => new Request(`${url.origin}/index.html`, req),
      });

      return new Response(notFoundResponse.body, { 
        ...notFoundResponse, 
        status: 200,
        headers: {
          ...notFoundResponse.headers,
          'Content-Type': 'text/html',
        }
      });
    } catch (e) {
      return new Response(e.message || e.toString(), { status: 500 });
    }
  }
}

/**
 * 根据文件扩展名获取正确的MIME类型
 * @param {string} path 文件路径
 * @returns {string} MIME类型
 */
function getContentType(path) {
  const extension = path.split('.').pop().toLowerCase();
  const contentTypes = {
    'html': 'text/html',
    'css': 'text/css',
    'js': 'application/javascript',
    'json': 'application/json',
    'xml': 'application/xml',
    'png': 'image/png',
    'jpg': 'image/jpeg',
    'jpeg': 'image/jpeg',
    'gif': 'image/gif',
    'svg': 'image/svg+xml',
    'ico': 'image/x-icon',
    'txt': 'text/plain',
    'pdf': 'application/pdf',
    'woff': 'font/woff',
    'woff2': 'font/woff2',
    'ttf': 'font/ttf',
    'eot': 'application/vnd.ms-fontobject',
    'otf': 'font/otf'
  };
  
  return contentTypes[extension] || 'text/plain';
}
