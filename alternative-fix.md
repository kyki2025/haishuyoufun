# 备选修复方案

如果添加 Worker 路由后仍有问题，请尝试以下方案：

## 方案 A：修改 DNS 记录类型

1. 在 Cloudflare DNS 页面
2. 删除现有的 www CNAME 记录
3. 添加新的 A 记录：
   - 类型：A
   - 名称：www
   - IPv4 地址：192.0.2.1 (占位符)
   - 代理状态：已代理（橙色云朵）

## 方案 B：使用页面规则重定向

1. 在 Cloudflare 控制台，进入 "Rules" → "Page Rules"
2. 点击 "Create Page Rule"
3. URL 模式：`www.haishu.fun/*`
4. 设置：Forwarding URL
5. 状态码：301 - Permanent Redirect
6. 目标 URL：`https://haishu.fun/$1`
7. 保存并部署

## 方案 C：检查 wrangler.toml 配置

确保 wrangler.toml 中包含正确的路由配置：

```toml
routes = [
  { pattern = "haishu.fun/*", zone_name = "haishu.fun" },
  { pattern = "www.haishu.fun/*", zone_name = "haishu.fun" }
]