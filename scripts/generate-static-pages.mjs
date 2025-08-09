#!/usr/bin/env node

/**
 * 生成静态HTML页面以改善SEO
 * 为每个主要路由创建独立的HTML文件
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseDir = path.join(__dirname, '../dist');

// 页面配置
const pages = [
  {
    path: 'ai-tools',
    title: '海叔有FUN - AI工具集合',
    description: '海叔精心收集的实用AI工具，包括PDF转换器、品茶记录、智能拼图等原创工具。提升工作效率和生活品质的数字助手。',
    keywords: '海叔有FUN,AI工具,PDF转换器,品茶记录,智能拼图,工作效率,数字生活',
    ogType: 'website'
  },
  {
    path: 'blog',
    title: '海叔有FUN - 生活分享博客',
    description: '海叔的生活感悟与经验分享，涵盖茶文化、日语学习、中年成长等话题。50岁大叔的数字生活实验室。',
    keywords: '海叔有FUN,生活分享,茶文化,日语学习,中年成长,个人博客',
    ogType: 'blog'
  },
  {
    path: 'contact',
    title: '海叔有FUN - 联系方式',
    description: '联系海叔，分享您的想法或寻求帮助。让我们一起探索有趣的数字生活。',
    keywords: '海叔有FUN,联系方式,反馈建议,合作咨询',
    ogType: 'website'
  },
  {
    path: 'about',
    title: '海叔有FUN - 关于海叔',
    description: '了解海叔，50岁大叔的数字生活故事。从传统到现代，从好奇到实践的人生旅程。',
    keywords: '海叔有FUN,关于海叔,个人简介,50岁大叔,数字生活',
    ogType: 'profile'
  }
];

// 生成HTML模板
function generateHTML(page) {
  return `<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${page.title}</title>
    <meta name="description" content="${page.description}" />
    <meta name="keywords" content="${page.keywords}" />
    <meta name="author" content="海叔" />
    <meta name="robots" content="index, follow" />
    <meta name="theme-color" content="#3b82f6" />
    <meta name="msapplication-TileColor" content="#3b82f6" />
    <meta property="og:locale" content="zh_CN" />
    
    <!-- 站点地图引用 -->
    <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
    
    <!-- Open Graph 标签 -->
    <meta property="og:title" content="${page.title}" />
    <meta property="og:description" content="${page.description}" />
    <meta property="og:type" content="${page.ogType}" />
    <meta property="og:url" content="https://haishu.fun/${page.path}" />
    <meta property="og:site_name" content="海叔有FUN" />
    
    <!-- Twitter 卡片 -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${page.title}" />
    <meta name="twitter:description" content="${page.description}" />
    
    <!-- 规范链接 -->
    <link rel="canonical" href="https://haishu.fun/${page.path}" />
    
    <link href="/main.css" rel="stylesheet">
  </head>
  <body>
    <div id="app">
      <!-- 加载中的占位内容 -->
      <div style="display: flex; justify-content: center; align-items: center; height: 100vh; font-family: system-ui, -apple-system, sans-serif;">
        <div style="text-align: center;">
          <h1 style="color: #3b82f6; margin-bottom: 16px;">海叔有FUN</h1>
          <p style="color: #6b7280;">正在加载中...</p>
        </div>
      </div>
    </div>
    <script src="/main.js"></script>
  </body>
</html>`;
}

// 创建页面文件
pages.forEach(page => {
  const filePath = path.join(baseDir, `${page.path}.html`);
  const htmlContent = generateHTML(page);
  
  fs.writeFileSync(filePath, htmlContent);
  console.log(`✅ 已生成: ${page.path}.html`);
});

console.log('\\n🎉 所有静态页面已生成完成！');
console.log('\\n📝 下一步：');
console.log('1. 重新部署网站');
console.log('2. 验证 https://haishu.fun/ai-tools 等页面可以正常访问');
console.log('3. 在 Google Search Console 中提交这些页面进行索引');
