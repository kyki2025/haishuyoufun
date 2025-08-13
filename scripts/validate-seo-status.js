#!/usr/bin/env node

const https = require('https');
const http = require('http');

/**
 * SEO 状态验证和监控脚本
 * 用于检查网站的 SEO 配置和索引状态
 */

const SITE_URL = 'https://haishu.fun';
const PAGES_TO_CHECK = [
  '/',
  '/ai-tools', 
  '/blog',
  '/contact'
];

const SPECIAL_FILES = [
  '/sitemap.xml',
  '/robots.txt'
];

// 颜色输出
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith('https') ? https : http;
    
    lib.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          data: data
        });
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function checkPageStatus(url) {
  try {
    const fullUrl = url.startsWith('http') ? url : `${SITE_URL}${url}`;
    const response = await fetchUrl(fullUrl);
    const status = response.statusCode;
    const contentType = response.headers['content-type'] || '';
    
    if (status === 200) {
      log(`✅ ${url} - HTTP ${status} (${contentType})`, 'green');
      
      // 检查HTML页面的SEO元素
      if (contentType.includes('text/html')) {
        const html = response.data;
        
        // 检查title标签
        const titleMatch = html.match(/<title[^>]*>([^<]+)</i);
        const title = titleMatch ? titleMatch[1] : '未找到';
        
        // 检查meta description
        const descMatch = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i);
        const description = descMatch ? descMatch[1].substring(0, 60) + '...' : '未找到';
        
        // 检查canonical标签
        const canonicalMatch = html.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i);
        const canonical = canonicalMatch ? canonicalMatch[1] : '未找到';
        
        // 检查robots meta
        const robotsMatch = html.match(/<meta\s+name=["']robots["']\s+content=["']([^"']+)["']/i);
        const robots = robotsMatch ? robotsMatch[1] : '未设置';
        
        log(`    标题: ${title}`, 'blue');
        log(`    描述: ${description}`, 'blue');
        log(`    规范化: ${canonical}`, 'blue');
        log(`    Robots: ${robots}`, 'blue');
        
        // 验证canonical URL是否与当前URL一致
        const expectedCanonical = `${SITE_URL}${url === '/' ? '/' : url}`;
        if (canonical !== expectedCanonical) {
          log(`    ⚠️  规范化URL不匹配! 期望: ${expectedCanonical}, 实际: ${canonical}`, 'yellow');
        }
      }
      
      return { status: 'success', statusCode: status, details: response.headers };
    } else {
      log(`❌ ${url} - HTTP ${status}`, 'red');
      return { status: 'error', statusCode: status };
    }
  } catch (error) {
    log(`❌ ${url} - 错误: ${error.message}`, 'red');
    return { status: 'error', error: error.message };
  }
}

async function validateSitemap() {
  log('\n🗺️  验证网站地图:', 'bold');
  
  try {
    const response = await fetchUrl(`${SITE_URL}/sitemap.xml`);
    
    if (response.statusCode === 200) {
      const contentType = response.headers['content-type'] || '';
      
      if (contentType.includes('application/xml') || contentType.includes('text/xml')) {
        log('✅ Sitemap 可访问且 Content-Type 正确', 'green');
        
        const xml = response.data;
        const urlMatches = xml.match(/<loc>([^<]+)<\/loc>/g) || [];
        const urls = urlMatches.map(match => match.replace(/<\/?loc>/g, ''));
        
        log(`📄 Sitemap 包含 ${urls.length} 个 URL:`, 'blue');
        urls.forEach(url => {
          log(`   - ${url}`, 'blue');
        });
        
        // 验证sitemap中的每个URL
        log('\n🔍 验证 Sitemap 中的 URL:', 'bold');
        for (const url of urls) {
          if (url.startsWith(SITE_URL)) {
            const path = url.replace(SITE_URL, '') || '/';
            await checkPageStatus(path);
          } else {
            log(`⚠️  外部URL: ${url}`, 'yellow');
          }
        }
        
      } else {
        log(`⚠️  Sitemap Content-Type 不正确: ${contentType}`, 'yellow');
      }
    } else {
      log(`❌ Sitemap 无法访问: HTTP ${response.statusCode}`, 'red');
    }
  } catch (error) {
    log(`❌ Sitemap 检查失败: ${error.message}`, 'red');
  }
}

async function checkRobotsTxt() {
  log('\n🤖 验证 robots.txt:', 'bold');
  
  try {
    const response = await fetchUrl(`${SITE_URL}/robots.txt`);
    
    if (response.statusCode === 200) {
      log('✅ robots.txt 可访问', 'green');
      
      const robots = response.data;
      log('📄 robots.txt 内容:', 'blue');
      robots.split('\n').forEach(line => {
        if (line.trim()) {
          log(`   ${line}`, 'blue');
        }
      });
      
      // 检查sitemap引用
      if (robots.includes('Sitemap:')) {
        log('✅ robots.txt 包含 Sitemap 引用', 'green');
      } else {
        log('⚠️  robots.txt 缺少 Sitemap 引用', 'yellow');
      }
      
    } else {
      log(`❌ robots.txt 无法访问: HTTP ${response.statusCode}`, 'red');
    }
  } catch (error) {
    log(`❌ robots.txt 检查失败: ${error.message}`, 'red');
  }
}

async function generateReport() {
  log('🔍 海叔有趣网站 SEO 状态检查报告', 'bold');
  log('='.repeat(50), 'blue');
  log(`检查时间: ${new Date().toLocaleString('zh-CN')}`, 'blue');
  log(`网站: ${SITE_URL}`, 'blue');
  
  // 检查主要页面
  log('\n📄 检查主要页面:', 'bold');
  for (const page of PAGES_TO_CHECK) {
    await checkPageStatus(page);
  }
  
  // 检查特殊文件
  log('\n📁 检查特殊文件:', 'bold');
  for (const file of SPECIAL_FILES) {
    await checkPageStatus(file);
  }
  
  // 验证sitemap
  await validateSitemap();
  
  // 检查robots.txt
  await checkRobotsTxt();
  
  log('\n📋 SEO 优化建议:', 'bold');
  log('1. 确保所有页面都有唯一的 title 和 meta description', 'blue');
  log('2. 定期在 Google Search Console 中检查索引状态', 'blue');
  log('3. 监控是否出现新的重复内容警告', 'blue');
  log('4. 每月运行此脚本检查网站状态', 'blue');
  
  log('\n✨ 检查完成!', 'green');
  log('如发现问题，请参考 fix-indexing-issues.md 文档', 'blue');
}

// 运行检查
if (require.main === module) {
  generateReport().catch(console.error);
}

module.exports = {
  checkPageStatus,
  validateSitemap,
  checkRobotsTxt,
  generateReport
};
