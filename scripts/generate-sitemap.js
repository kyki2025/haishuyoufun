/**
 * 动态生成sitemap.xml的脚本
 * 运行: node scripts/generate-sitemap.js
 */

const fs = require('fs');
const path = require('path');

// 网站基础信息
const SITE_URL = 'https://haishu.fun';
// 使用完整的ISO日期格式，符合搜索引擎规范
const CURRENT_DATE = new Date().toISOString();

// 页面配置
const pages = [
  {
    url: '/',
    lastmod: CURRENT_DATE,
    changefreq: 'weekly',
    priority: '1.0'
  },
  {
    url: '/ai-tools',
    lastmod: CURRENT_DATE,
    changefreq: 'weekly',
    priority: '0.9'
  },
  {
    url: '/life',
    lastmod: CURRENT_DATE,
    changefreq: 'weekly',
    priority: '0.8'
  },
  {
    url: '/contact',
    lastmod: CURRENT_DATE,
    changefreq: 'monthly',
    priority: '0.7'
  },
  {
    url: '/about',
    lastmod: CURRENT_DATE,
    changefreq: 'monthly',
    priority: '0.6'
  }
];

// 工具页面配置
const tools = [
  'https://pdf.haishu.fun',
  'https://tea.haishu.fun',
  'https://mergepics.haishu.fun',
  'https://food.haishu.fun'
];

// 生成sitemap XML内容
function generateSitemap() {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  // 添加主要页面
  pages.forEach(page => {
    xml += `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
  });

  // 添加工具页面
  tools.forEach(tool => {
    xml += `  <url>
    <loc>${tool}</loc>
    <lastmod>${CURRENT_DATE}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
`;
  });

  xml += `</urlset>`;
  return xml;
}

// 写入sitemap文件
function writeSitemap() {
  const sitemapContent = generateSitemap();
  const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
  
  // 确保public目录存在
  const publicDir = path.dirname(sitemapPath);
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
  console.log('✅ Sitemap generated successfully at:', sitemapPath);
  console.log('📊 Total URLs:', pages.length + tools.length);
}

// 执行生成
if (require.main === module) {
  writeSitemap();
}

module.exports = { generateSitemap, writeSitemap };