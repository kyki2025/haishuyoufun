export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // 如果是 www 子域名，重定向到主域名
    if (url.hostname === 'www.haishu.fun') {
      const redirectUrl = new URL(request.url);
      redirectUrl.hostname = 'haishu.fun';
      
      return Response.redirect(redirectUrl.toString(), 301);
    }
    
    // 对于其他请求，返回到主站点
    return fetch(request);
  }
};