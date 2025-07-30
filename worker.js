/**
 * 海叔有FUN - Cloudflare Worker 入口文件
 * 用于处理请求并提供静态资源
 */

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

/**
 * 处理所有传入的请求
 * @param {Request} request
 * @returns {Response}
 */
async function handleRequest(request) {
  const url = new URL(request.url);
  
  // 如果请求的是根路径，返回index.html
  if (url.pathname === '/' || url.pathname === '') {
    return getAsset('index.html');
  }
  
  // 尝试获取请求的资源
  try {
    return await getAsset(url.pathname.slice(1));
  } catch (e) {
    // 如果资源不存在，返回index.html（用于SPA路由）
    return getAsset('index.html');
  }
}

/**
 * 从KV存储或Assets中获取静态资源
 * @param {string} path 资源路径
 * @returns {Response}
 */
async function getAsset(path) {
  // 这里您需要根据实际情况选择使用KV或Assets
  // 如果使用KV:
  // const asset = await ASSETS.get(path);
  
  // 如果使用Assets (推荐):
  let asset;
  try {
    asset = await fetch(`https://static-assets.example.com/${path}`);
    if (!asset.ok) throw new Error('Asset not found');
  } catch (e) {
    // 如果资源不存在，尝试返回index.html
    if (path !== 'index.html') {
      return getAsset('index.html');
    }
    return new Response('资源未找到', { status: 404 });
  }
  
  // 设置正确的MIME类型
  const contentType = getContentType(path);
  const response = new Response(asset.body, {
    status: 200,
    headers: {
      'Content-Type': contentType,
      'Cache-Control': 'public, max-age=86400',
    }
  });
  
  return response;
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