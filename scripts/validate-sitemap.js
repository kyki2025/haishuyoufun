#!/usr/bin/env node

/**
 * 网站地图验证和故障排除脚本
 * 用于检查网站地图是否可以正常访问并符合Google要求
 */

const https = require('https');
const http = require('http');

const SITEMAP_URL = 'https://haishu.fun/sitemap.xml';
const ROBOTS_URL = 'https://haishu.fun/robots.txt';

/**
 * 发送HTTP请求
 */
function makeRequest(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https:') ? https : http;
    client.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, data, headers: res.headers }));
    }).on('error', reject);
  });
}

/**
 * 验证网站地图格式
 */
function validateSitemapFormat(xmlContent) {
  const issues = [];
  
  // 检查XML声明
  if (!xmlContent.includes('<?xml version="1.0" encoding="UTF-8"?>')) {
    issues.push('❌ 缺少XML声明');
  }
  
  // 检查命名空间
  if (!xmlContent.includes('xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"')) {
    issues.push('❌ 缺少或错误的sitemap命名空间');
  }
  
  // 检查URL格式
  const urlMatches = xmlContent.match(/<loc>([^<]+)<\/loc>/g);
  if (urlMatches) {
    urlMatches.forEach((match, index) => {
      const url = match.replace(/<\/?loc>/g, '');
      if (!url.startsWith('https://')) {
        issues.push(`❌ URL ${index + 1}: ${url} 不是HTTPS`);
      }
    });
  }
  
  // 检查日期格式
  const dateMatches = xmlContent.match(/<lastmod>([^<]+)<\/lastmod>/g);
  if (dateMatches) {
    dateMatches.forEach((match, index) => {
      const date = match.replace(/<\/?lastmod>/g, '');
      if (!date.includes('T') && !date.match(/^\d{4}-\d{2}-\d{2}$/)) {
        issues.push(`❌ 日期 ${index + 1}: ${date} 格式不正确`);
      }
    });
  }
  
  return issues;
}

/**
 * 主验证函数
 */
async function validateSitemap() {
  console.log('🔍 开始验证网站地图...\n');
  
  try {
    // 验证sitemap.xml
    console.log('📄 检查 sitemap.xml...');
    const sitemapResponse = await makeRequest(SITEMAP_URL);
    
    if (sitemapResponse.status === 200) {
      console.log('✅ sitemap.xml 可以正常访问');
      console.log(`📊 Content-Type: ${sitemapResponse.headers['content-type']}`);
      console.log(`📦 内容大小: ${sitemapResponse.data.length} 字节`);
      
      // 检查内容类型
      if (sitemapResponse.headers['content-type']?.includes('application/xml')) {
        console.log('✅ Content-Type 正确');
      } else {
        console.log('⚠️ Content-Type 可能不正确，应该是 application/xml');
      }
      
      // 验证格式
      const formatIssues = validateSitemapFormat(sitemapResponse.data);
      if (formatIssues.length === 0) {
        console.log('✅ 网站地图格式验证通过');
      } else {
        console.log('⚠️ 网站地图格式问题:');
        formatIssues.forEach(issue => console.log(`  ${issue}`));
      }
      
      // 统计URL数量
      const urlCount = (sitemapResponse.data.match(/<loc>/g) || []).length;
      console.log(`📈 包含 ${urlCount} 个URL`);
      
    } else {
      console.log(`❌ sitemap.xml 无法访问 (状态码: ${sitemapResponse.status})`);
    }
    
    console.log('\n📄 检查 robots.txt...');
    const robotsResponse = await makeRequest(ROBOTS_URL);
    
    if (robotsResponse.status === 200) {
      console.log('✅ robots.txt 可以正常访问');
      
      // 检查是否包含sitemap引用
      if (robotsResponse.data.includes('Sitemap:')) {
        console.log('✅ robots.txt 包含 Sitemap 引用');
      } else {
        console.log('⚠️ robots.txt 不包含 Sitemap 引用');
      }
      
      console.log('\n📝 robots.txt 内容:');
      console.log(robotsResponse.data);
      
    } else {
      console.log(`❌ robots.txt 无法访问 (状态码: ${robotsResponse.status})`);
    }
    
  } catch (error) {
    console.error('❌ 验证过程中发生错误:', error.message);
  }
  
  console.log('\n🔧 Google Search Console 提交建议:');
  console.log('1. 在 Google Search Console 中手动提交网站地图');
  console.log('2. URL: https://search.google.com/search-console');
  console.log('3. 选择您的网站 → 站点地图 → 添加新的站点地图');
  console.log('4. 输入: sitemap.xml');
  console.log('5. 等待 Google 重新爬取（可能需要几天时间）');
  
  console.log('\n📋 其他SEO建议:');
  console.log('• 确保所有页面都有唯一的 title 和 meta description');
  console.log('• 使用结构化数据标记');
  console.log('• 确保网站加载速度快');
  console.log('• 提供高质量、原创的内容');
  console.log('• 确保网站移动端友好');
}

// 运行验证
validateSitemap().catch(console.error);
