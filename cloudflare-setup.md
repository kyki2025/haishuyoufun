# Cloudflare www 重定向设置指南

## 问题诊断
当前 www.haishu.fun 返回 522 错误，说明 Cloudflare 设置需要调整。

## 解决方案

### 方案 1：修复 Worker 路由（推荐）

1. **登录 Cloudflare 控制台**
   - 访问 https://dash.cloudflare.com
   - 选择你的域名 haishu.fun

2. **进入 Workers & Pages**
   - 点击左侧菜单 "Workers & Pages"
   - 找到你的 Worker（应该叫 haishuyoufun）

3. **添加 www 路由**
   - 点击你的 Worker 名称
   - 点击 "Settings" 标签
   - 点击 "Triggers" 部分
   - 在 "Routes" 下点击 "Add route"
   - 添加路由：`www.haishu.fun/*`
   - 选择区域：haishu.fun
   - 点击 "Save"

### 方案 2：修复 DNS 设置

1. **检查 DNS 记录**
   - 在 Cloudflare 控制台，点击 "DNS" 标签
   - 查找 www 记录

2. **如果没有 www 记录，添加一个**
   - 点击 "Add record"
   - 类型：CNAME
   - 名称：www
   - 目标：haishu.fun
   - 代理状态：已代理（橙色云朵）
   - 点击 "Save"

3. **如果有 www 记录，确保设置正确**
   - 类型：CNAME
   - 名称：www
   - 目标：haishu.fun
   - 代理状态：已代理（橙色云朵）

## 验证步骤

完成设置后，等待 2-5 分钟，然后：

1. 访问 https://www.haishu.fun
2. 应该自动重定向到 https://haishu.fun
3. 或者运行验证脚本：`./verify-deployment.sh`

## 预期结果

```bash
curl -I https://www.haishu.fun
```

应该返回：
```
HTTP/2 301
Location: https://haishu.fun/
```

而不是：
```
HTTP/2 522