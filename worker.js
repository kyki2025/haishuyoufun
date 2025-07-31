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
    // 移除无效的 Feature-Policy 设置

    return response;

  } catch (e) {
    // 如果资源不存在，返回 index.html（用于 SPA 路由）
    try {
      let notFoundResponse = await getAssetFromKV(event, {
        mapRequestToAsset: req => new Request(`${new URL(req.url).origin}/index.html`, req),
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