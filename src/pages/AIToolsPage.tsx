/**
 * AI工具页面
 * 展示完整的AI工具集合，支持分类和搜索
 */
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { Helmet } from 'react-helmet';
import Analytics from '../components/Analytics';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { 
  Brain, 
  MessageSquare, 
  Image, 
  FileText, 
  Music, 
  Video, 
  Code, 
  Palette,
  ExternalLink,
  Star,
  Search,
  Filter,
  Coffee
} from 'lucide-react';

const aiTools = [
  {
    id: 1,
    title: "海叔PDF转换器",
    description: "专业的PDF与其他格式文件互转工具，支持PDF转Word、Excel、PPT等多种格式，操作简单，转换质量高，完全免费使用。",
    icon: <FileText className="w-8 h-8" />,
    category: "文档工具",
    rating: 4.9,
    users: "5k+",
    color: "from-emerald-400 to-emerald-600",
    url: "https://pdf.haishu.fun",
    tags: ["PDF转换", "文档处理", "办公工具", "免费工具"],
    featured: true,
    details: {
      features: [
        "支持PDF转Word、Excel、PPT等格式",
        "批量文件处理功能",
        "保持原文档格式和布局",
        "文件隐私保护，处理后自动删除",
        "无需注册，完全免费使用",
        "支持大文件处理"
      ],
      techStack: ["React", "Node.js", "PDF-lib"],
      launchDate: "2024年1月",
      github: "https://github.com/haishu"
    }
  },
  {
    id: 2,
    title: "海叔品茶记录",
    description: "专业的品茶信息记录和管理工具，帮助茶友记录每一次品茶体验，包含茶叶信息、品茶心得、图片记录等功能，是茶文化爱好者的必备工具。",
    icon: <Coffee className="w-8 h-8" />,
    category: "生活记录",
    rating: 4.8,
    users: "2k+",
    color: "from-amber-400 to-orange-600",
    url: "https://tea.haishu.fun",
    tags: ["品茶记录", "茶文化", "生活分享", "个人管理"],
    featured: true,
    details: {
      features: [
        "详细的茶叶信息记录",
        "品茶心得和评分系统",
        "图片上传和管理",
        "品茶历史统计分析",
        "分享功能和社交互动",
        "个人品茶日历"
      ],
      techStack: ["Vue.js", "Express", "MongoDB"],
      launchDate: "2024年3月",
      github: "https://github.com/haishu"
    }
  },
  {
    id: 3,
    title: "海叔智能拼图工具",
    description: "智能拼图工具，上传图片，智能推荐布局，模板，滤镜美化，一键生成平台适配的拼贴作品。支持多种图片格式，提供丰富的创意模板库，专业的滤镜和美化效果，让您轻松创作出精美的拼贴作品。",
    icon: <Image className="w-8 h-8" />,
    category: "图片工具",
    rating: 4.7,
    users: "3k+",
    color: "from-purple-400 to-pink-600",
    url: "https://mergepics.haishu.fun",
    tags: ["图片拼接", "智能布局", "创意设计", "图片处理"],
    featured: true,
    details: {
      features: [
        "智能推荐最佳布局方案",
        "丰富的创意模板库",
        "专业滤镜和美化效果",
        "多平台尺寸适配",
        "批量图片处理",
        "一键导出高清作品"
      ],
      techStack: ["React", "Canvas API", "AI算法"],
      launchDate: "2024年5月",
      github: "https://github.com/haishu"
    }
  }
];

const categories = ["全部", "文档工具", "生活记录", "图片工具"];

export default function AIToolsPage() {
  const [selectedCategory, setSelectedCategory] = useState("全部");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTools = aiTools.filter(tool => {
    const matchesCategory = selectedCategory === "全部" || tool.category === selectedCategory;
    const matchesSearch = tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tool.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredTools = aiTools.filter(tool => tool.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <SEO 
        title="海叔有趣 - AI工具集合 | 免费实用工具"
        description="海叔原创AI工具集合，包括PDF转换器、品茶记录、智能拼图工具等多种实用工具，完全免费使用。"
        keywords="AI工具,PDF转换,品茶记录,智能拼图,免费工具,海叔有趣"
      />
      <Helmet>
        {/* 基本元标签 */}
        <meta name="author" content="海叔有趣" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Open Graph 标签 */}
        <meta property="og:title" content="海叔有趣 - AI工具集合 | 免费实用工具" />
        <meta property="og:description" content="海叔原创AI工具集合，包括PDF转换器、品茶记录、智能拼图工具等多种实用工具，完全免费使用。" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://haishu.fun/ai-tools" />
        <meta property="og:image" content="https://haishu.fun/images/og-image.jpg" />
        <meta property="og:site_name" content="海叔有趣" />
        
        {/* Twitter 卡片 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="海叔有趣 - AI工具集合 | 免费实用工具" />
        <meta name="twitter:description" content="海叔原创AI工具集合，包括PDF转换器、品茶记录、智能拼图工具等多种实用工具，完全免费使用。" />
        <meta name="twitter:image" content="https://haishu.fun/images/og-image.jpg" />
        
        {/* 结构化数据标记 - 软件应用集合 */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              "itemListElement": [
                ${aiTools.map((tool, index) => `
                  {
                    "@type": "SoftwareApplication",
                    "position": ${index + 1},
                    "name": "${tool.title}",
                    "description": "${tool.description}",
                    "applicationCategory": "WebApplication",
                    "operatingSystem": "Any",
                    "offers": {
                      "@type": "Offer",
                      "price": "0",
                      "priceCurrency": "CNY"
                    },
                    "aggregateRating": {
                      "@type": "AggregateRating",
                      "ratingValue": "${tool.rating}",
                      "ratingCount": "${tool.users.replace('+', '')}"
                    }
                  }
                `).join(',')}
              ]
            }
          `}
        </script>
        
        {/* 网站所有者信息 */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "海叔有趣",
              "url": "https://haishu.fun",
              "logo": "https://haishu.fun/images/logo.png",
              "sameAs": [
                "https://github.com/haishu"
              ]
            }
          `}
        </script>
        
        {/* 面包屑导航结构化数据 */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "首页",
                  "item": "https://haishu.fun"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "AI工具",
                  "item": "https://haishu.fun/ai-tools"
                }
              ]
            }
          `}
        </script>
      </Helmet>
      <Navigation />
      {/* 添加规范链接 */}
      <Helmet>
        <link rel="canonical" href="https://haishu.fun/ai-tools" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            海叔的<span className="text-blue-600">原创工具</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            亲手打造的实用工具，结合个人需求和用户反馈不断优化。每个工具都承载着海叔对技术和生活的理解。
          </p>
          
          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="搜索AI工具..."
                className="pl-10 pr-4 py-3 text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full transition-all duration-300 ${
                  selectedCategory === category 
                    ? "bg-blue-600 hover:bg-blue-700" 
                    : "bg-transparent hover:bg-blue-50"
                }`}
              >
                <Filter className="w-4 h-4 mr-2" />
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tools */}
      {selectedCategory === "全部" && (
        <section className="py-12 px-4" aria-labelledby="featured-tools-heading">
          <div className="max-w-7xl mx-auto">
            <h2 id="featured-tools-heading" className="text-3xl font-bold text-gray-900 mb-8 text-center">
              🚀 海叔原创作品
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredTools.map((tool) => (
                <Card 
                  key={tool.id}
                  className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-yellow-200 bg-gradient-to-br from-yellow-50 to-white"
                >
                  <CardHeader className="pb-4">
                    <div 
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${tool.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                      aria-hidden="true"
                      role="img"
                      aria-label={`${tool.title} 图标`}
                    >
                      {tool.icon}
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {tool.title}
                      </CardTitle>
                      <div className="flex items-center gap-1 text-yellow-500">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm font-medium text-gray-700">{tool.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                        {tool.category}
                      </span>
                      <span>{tool.users} 用户</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                  <CardDescription className="text-gray-600 mb-4 leading-relaxed h-24 overflow-hidden">
                    {tool.description}
                  </CardDescription>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {tool.tags.map((tag) => (
                        <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button 
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-xl transition-all duration-300"
                      onClick={() => window.open(tool.url, '_blank', 'noopener noreferrer')}
                      aria-label={`立即使用${tool.title}`}
                    >
                      立即使用
                      <ExternalLink className="w-4 h-4 ml-2" aria-hidden="true" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Tools */}
      <section className="py-12 px-4" aria-labelledby="all-tools-heading">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 id="all-tools-heading" className="text-3xl font-bold text-gray-900">
              {selectedCategory === "全部" ? "所有工具" : `${selectedCategory}工具`}
            </h2>
            <span className="text-gray-600">
              共 {filteredTools.length} 个工具
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTools.map((tool) => (
              <Card 
                key={tool.id}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <CardHeader className="pb-3">
                  <div 
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${tool.color} flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform duration-300`}
                    aria-hidden="true"
                    role="img"
                    aria-label={`${tool.title} 图标`}
                  >
                    {tool.icon}
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {tool.title}
                  </CardTitle>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
                      {tool.category}
                    </span>
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Star className="w-3 h-3 fill-current" />
                      <span>{tool.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600 mb-4 text-sm leading-relaxed h-16 overflow-hidden line-clamp-3">
                    {tool.description}
                  </CardDescription>
                  <Button 
                    size="sm"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                    onClick={() => window.open(tool.url, '_blank', 'noopener noreferrer')}
                    aria-label={`使用${tool.title}工具`}
                  >
                    使用工具
                    <ExternalLink className="w-3 h-3 ml-2" aria-hidden="true" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredTools.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">没有找到匹配的工具，试试其他关键词？</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
