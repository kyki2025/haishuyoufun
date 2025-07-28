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
  ArrowRight
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
    features: ["多格式支持", "批量转换", "隐私保护", "无需注册"]
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
    url: "http://6a198661e2af44eb9102f38f6e452cf4.ap-singapore.myide.io/",
    featured: true,
    tags: ["品茶记录", "茶文化", "生活分享"],
    features: ["详细记录", "图片上传", "心得分享", "统计分析"]
  }
];

export default function AITools() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Brain className="w-10 h-10 text-blue-600" />
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
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 border-gradient-to-r from-yellow-200 to-orange-200 bg-gradient-to-br from-white via-yellow-50 to-orange-50 overflow-hidden"
            >
              <CardHeader className="pb-6 relative">
                {/* 装饰背景 */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-yellow-200/30 to-orange-200/30 rounded-full -translate-y-6 translate-x-6"></div>
                
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${tool.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {tool.icon}
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
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 text-yellow-500">
                        <Star className="w-5 h-5 fill-current" />
                        <span className="text-lg font-bold text-gray-700">{tool.rating}</span>
                      </div>
                      <span className="text-gray-500 text-sm">({tool.users} 用户)</span>
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
                  <h4 className="text-sm font-semibold text-gray-800 mb-3">核心功能：</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {tool.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* 标签 */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {tool.tags.map((tag) => (
                    <span key={tag} className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <Button 
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                  onClick={() => tool.url ? window.open(tool.url, '_blank') : null}
                >
                  立即体验我的作品
                  <ExternalLink className="w-5 h-5 ml-2" />
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
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 hover:from-blue-700 hover:via-purple-700 hover:to-blue-900 text-white font-semibold px-12 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              了解工具详情
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
