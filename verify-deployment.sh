#!/bin/bash

echo "🚀 验证网站部署状态..."
echo "================================"

echo ""
echo "1. 检查主页 Content-Type:"
curl -s -I https://haishu.fun/ | grep -i content-type
echo ""

echo "2. 检查 sitemap.xml:"
curl -s -I https://haishu.fun/sitemap.xml | grep -i content-type
echo ""

echo "3. 检查 robots.txt:"
curl -s -I https://haishu.fun/robots.txt | grep -i content-type
echo ""

echo "4. 验证主页状态码:"
curl -s -I https://haishu.fun/ | head -1
echo ""

echo "5. 验证 sitemap.xml 状态码:"
curl -s -I https://haishu.fun/sitemap.xml | head -1
echo ""

echo "6. 验证 robots.txt 状态码:"
curl -s -I https://haishu.fun/robots.txt | head -1
echo ""

echo "================================"
echo "✅ 验证完成！"
echo ""
echo "期望结果:"
echo "- 主页 Content-Type: text/html"
echo "- sitemap.xml Content-Type: application/xml"
echo "- robots.txt Content-Type: text/plain"
echo "- 所有状态码都应该是 200"