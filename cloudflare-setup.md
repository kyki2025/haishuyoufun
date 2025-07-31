# Cloudflare Worker 部署设置指南

## 设置 GitHub Secrets

为了让 GitHub Actions 能够自动部署到 Cloudflare Worker，您需要在 GitHub 仓库中设置以下密钥：

1. 登录到 GitHub，进入您的仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中点击 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 按钮
5. 添加以下两个密钥：

### CF_ACCOUNT_ID

- 名称: `CF_ACCOUNT_ID`
- 值: `e6b96ab1c6d389ad7fb6584810573128`

### CF_API_TOKEN

- 名称: `CF_API_TOKEN`
- 值: 您需要从 Cloudflare 获取 API 令牌

## 获取 Cloudflare API 令牌

1. 登录到 [Cloudflare 控制台](https://dash.cloudflare.com/)
2. 点击右上角的个人资料图标，然后选择 "My Profile"
3. 在左侧菜单中点击 "API Tokens"
4. 点击 "Create Token" 按钮
5. 选择 "Edit Cloudflare Workers" 模板
6. 设置令牌权限：
   - Account - Workers Scripts - Edit
   - Account - Workers Routes - Edit
   - Zone - Workers Routes - Edit
7. 设置包含的账户资源为您的账户
8. 点击 "Continue to summary" 然后 "Create Token"
9. 复制生成的令牌并将其添加到 GitHub Secrets 中的 `CF_API_TOKEN`

## 删除或禁用原来的 Pages 项目

1. 登录到 [Cloudflare 控制台](https://dash.cloudflare.com/)
2. 进入 "Workers & Pages" 部分
3. 找到原来的 Pages 项目 (haishuyoufun)
4. 点击项目，进入设置
5. 滚动到底部，找到 "Advanced" 部分
6. 点击 "Delete project" 按钮
7. 确认删除

完成这些步骤后，您将只保留 Worker 项目，并且它会自动从 GitHub 仓库部署代码。