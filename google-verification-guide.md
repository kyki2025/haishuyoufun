# Google Search Console 验证指南

## 1. 添加验证文件方法

选择以下任一方法验证网站所有权：

### 方法1: HTML 文件验证
1. 访问 [Google Search Console](https://search.google.com/search-console)
2. 点击"添加资源"
3. 选择"网址前缀"，输入 `https://haishu.fun`
4. 选择"HTML 文件"验证方法
5. 下载 Google 提供的 HTML 验证文件（例如：google123abc.html）
6. 将文件放到项目的 `dist/` 目录下
7. 重新部署网站
8. 在 Google Search Console 点击"验证"

### 方法2: HTML 标签验证（推荐）
1. 在 Google Search Console 选择"HTML 标签"方法
2. 复制提供的 meta 标签，例如：
   ```html
   <meta name="google-site-verification" content="your-verification-code" />
   ```
3. 将此标签添加到 `dist/index.html` 的 `<head>` 部分
4. 重新部署网站
5. 在 Google Search Console 点击"验证"

## 2. 提交站点地图

验证成功后：
1. 在左侧菜单找到"站点地图"
2. 点击"添加新的站点地图"
3. 输入：`sitemap.xml`
4. 点击"提交"

## 3. 请求索引

对于重要页面，可以手动请求索引：
1. 使用左侧的"网址检查"工具
2. 输入页面URL，例如：`https://haishu.fun/ai-tools`
3. 点击"请求编入索引"

## 4. 监控收录情况

- 每周检查"覆盖范围"报告
- 关注"效果"报告中的搜索表现
- 修复发现的任何问题
