/**
 * AI工具展示组件
 * 展示海叔收集和推荐的各种AI工具
 */
import React from 'react';
import { Link } from 'react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
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
  Coffee,
  ArrowRight,
  Users,
  Sparkles
} from 'lucide-react';

const aiTools = [
  {
    id: 1,
    title: "海叔PDF转换器",
    description: "专业的PDF与其他格式文件互转工具，支持多种格式互转，简单易用，完全免费",
    icon: <FileText className="w-8 h-8" />,
    category: "文档工具",
    rating: 4.9,
    users: "5k+",
    color: "from-emerald-400 to-emerald-600",
    url: "https://pdf.haishu.fun",
    featured: true,
    tags: ["PDF转换", "文档处理", "免费工具"],
    features: ["多格式支持", "批量转换", "隐私保护", "无需注册"],
    status: "🔥 热门"
  },
  {
    id: 2,
    title: "海叔品茶记录",
    description: "专业的品茶信息记录和管理工具，记录每一次品茶体验，分享茶文化心得",
    icon: <Coffee className="w-8 h-8" />,
    category: "生活记录",
    rating: 4.8,
    users: "2k+",
    color: "from-amber-400 to-orange-600",
    url: "https://tea.haishu.fun",
    featured: true,
    tags: ["品茶记录", "茶文化", "生活分享"],
    features: ["详细记录", "图片上传", "心得分享", "统计分析"],
    status: "✨ 最新"
  },
  {
    id: 3,
    title: "海叔智能拼图工具",
        description: "智能拼图工具，上传图片，智能推荐布局，模板，滤镜美化，一键生成平台适配的拼贴作品",
    icon: <Image className="w-8 h-8" />,
    category: "图片工具",
    rating: 4.7,
    users: "3k+",
    color: "from-purple-400 to-pink-600",
    url: "https://mergepics.haishu.fun",
    featured: true,
    tags: ["图片拼接", "智能布局", "创意设计"],
    features: ["智能推荐", "创意模板", "滤镜美化", "平台适配"],
    status: "🎨 创意"
  }
];

export default function AITools() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="relative">
              <Brain className="w-10 h-10 text-blue-600" />
              <Sparkles className="w-4 h-4 text-yellow-500 absolute -top-1 -right-1" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">AI工具箱</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            精心收集的AI工具，让科技为生活添彩。每一个工具都经过海叔亲自体验和推荐。
          </p>
        </div>
        
        {/* 工具展示 - 突出个人作品 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {aiTools.map((tool) => (
            <Card 
              key={tool.id}
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 border-gradient-to-r from-yellow-200 to-orange-200 bg-gradient-to-br from-white via-yellow-50 to-orange-50 overflow-hidden relative"
            >
              {/* 状态标签 */}
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full font-semibold animate-pulse shadow-lg">
                  {tool.status}
                </span>
              </div>

              <CardHeader className="pb-6 relative">
                {/* 装饰背景 */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-yellow-200/30 to-orange-200/30 rounded-full -translate-y-6 translate-x-6"></div>
                
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${tool.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg relative overflow-hidden`}>
                  {tool.icon}
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {tool.title}
                    </CardTitle>
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-sm px-3 py-1 rounded-full font-semibold shadow-md">
                      海叔出品
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium text-sm">
                      {tool.category}
                    </span>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1 text-yellow-500">
                        <Star className="w-5 h-5 fill-current" />
                        <span className="text-lg font-bold text-gray-700">{tool.rating}</span>
                      </div>
                      <div className="flex items-center gap-1 text-blue-500">
                        <Users className="w-4 h-4" />
                        <span className="text-sm font-medium text-gray-600">{tool.users}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <CardDescription className="text-gray-700 mb-6 leading-relaxed text-base">
                  {tool.description}
                </CardDescription>
                
                {/* 功能特点 */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-blue-500" />
                    核心功能：
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {tool.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* 标签 */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {tool.tags.map((tag) => (
                    <span key={tag} className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium hover:from-blue-100 hover:to-purple-100 hover:text-blue-700 transition-all duration-300 cursor-default">
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <Button 
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg group relative overflow-hidden"
                  onClick={() => {
                    // 添加点击统计
                    const clickData = {
                      tool: tool.title,
                      timestamp: new Date().toISOString(),
                      action: 'tool_click'
                    };
                    const existingClicks = JSON.parse(localStorage.getItem('tool_clicks') || '[]');
                    existingClicks.push(clickData);
                    localStorage.setItem('tool_clicks', JSON.stringify(existingClicks));
                    
                    if (tool.url) {
                      window.open(tool.url, '_blank');
                    }
                  }}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    立即体验我的作品
                    <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* 了解更多按钮 */}
        <div className="text-center mt-16">
          <Link to="/ai-tools">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 hover:from-blue-700 hover:via-purple-700 hover:to-blue-900 text-white font-semibold px-12 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                了解工具详情
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}