# 删除 Cloudflare Pages 项目指南

要删除现有的 Cloudflare Pages 项目并只保留 Worker 项目，请按照以下步骤操作：

## 1. 登录 Cloudflare 控制台

访问 [Cloudflare 控制台](https://dash.cloudflare.com/) 并使用您的账户登录。

## 2. 进入 Workers & Pages 部分

在左侧导航菜单中，点击 "Workers & Pages"。

## 3. 查找并选择 Pages 项目

在项目列表中，找到您想要删除的 Pages 项目（名为 "haishuyoufun"）。

## 4. 进入项目设置

点击项目名称，进入项目详情页面。

## 5. 找到设置选项

在项目详情页面的顶部导航栏中，点击 "设置"（Settings）选项卡。

## 6. 滚动到底部

在设置页面中，滚动到底部，找到 "高级"（Advanced）部分。

## 7. 删除项目

在高级部分中，找到 "删除项目"（Delete project）按钮，通常是红色的。

![删除项目按钮](https://example.com/delete-button.png)

## 8. 确认删除

点击 "删除项目" 按钮后，系统会要求您确认此操作。可能需要输入项目名称或点击确认按钮。

## 9. 完成删除

确认后，Pages 项目将被删除，只保留 Worker 项目。

## 10. 验证域名设置

删除 Pages 项目后，确保您的域名（haishuyoufun.pages.dev 和 haishu.fun）正确指向 Worker 项目。

如果需要，您可以在 Worker 项目的设置中添加自定义域名：

1. 进入 Worker 项目
2. 点击 "触发器"（Triggers）选项卡
3. 在 "自定义域"（Custom Domains）部分，点击 "添加自定义域"（Add Custom Domain）
4. 输入您的域名（例如 haishu.fun）并完成设置

## 注意事项

- 删除操作是不可逆的，请确保您已经备份了任何重要数据
- 如果 Pages 项目和 Worker 项目共享同一个域名，删除 Pages 项目后可能需要重新配置域名
- 确保您的 Worker 项目已经正确部署并且可以访问，然后再删除 Pages 项目