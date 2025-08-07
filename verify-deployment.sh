#!/bin/bash

echo "🔍 验证 www.haishu.fun 重定向部署状态"
echo "=================================="

echo ""
echo "1. 测试主域名 haishu.fun:"
curl -I https://haishu.fun 2>/dev/null | head -1

echo ""
echo "2. 测试 www 子域名 www.haishu.fun:"
curl -I https://www.haishu.fun 2>/dev/null | head -1

echo ""
echo "3. 测试重定向 (如果正常应该返回 301):"
curl -I https://www.haishu.fun 2>/dev/null | grep -E "(HTTP|Location)"

echo ""
echo "4. DNS 解析检查:"
echo "haishu.fun 解析到:"
dig +short haishu.fun

echo "www.haishu.fun 解析到:"
dig +short www.haishu.fun

echo ""
echo "=================================="
echo "✅ 如果看到 HTTP/2 301 和 Location: https://haishu.fun，说明重定向正常"
echo "❌ 如果看到 HTTP/2 522，说明需要修复 Cloudflare 设置"