/**
 * 兴趣分享组件
 * 展示海叔的个人兴趣爱好，如茶文化、日语学习等
 */
import React from 'react';
import { Link } from 'react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Coffee, Languages, Book, Camera, Music, Gamepad2 } from 'lucide-react';

const interests = [
  {
    id: 1,
    title: "茶文化探索",
    description: "从龙井到普洱，品味中华茶文化的深邃与美好，还有专属品茶记录工具",
    icon: <Coffee className="w-8 h-8" />,
    image: "https://pub-cdn.sider.ai/u/U01AHE70X2G/web-coder/6886e9acf2d3a0ac8dcf27f0/resource/c1319dcb-2cc3-4b0c-9040-83f034b67ee4.jpg",
    posts: 48,
    category: "生活美学",
    hasApp: true,
    appUrl: "https://tea.haishu.fun"
  },
  {
    id: 2,
    title: "日语学习之路",
    description: "五十而学日语，体验不同文化的魅力与智慧",
    icon: <Languages className="w-8 h-8" />,
    image: "https://pub-cdn.sider.ai/u/U01AHE70X2G/web-coder/6886e9acf2d3a0ac8dcf27f0/resource/8732c63a-6034-40c8-ade5-b8d412eba13d.jpg",
    posts: 32,
    category: "语言学习"
  },
  {
    id: 3,
    title: "阅读与思考",
    description: "好书推荐与读后感分享，让知识点亮人生",
    icon: <Book className="w-8 h-8" />,
    image: "https://pub-cdn.sider.ai/u/U01AHE70X2G/web-coder/6886e9acf2d3a0ac8dcf27f0/resource/85b19a11-51b3-479b-83df-650845db2999.jpg",
    posts: 56,
    category: "知识分享"
  },
  {
    id: 4,
    title: "摄影日常",
    description: "用镜头记录生活中的美好瞬间",
    icon: <Camera className="w-8 h-8" />,
    image: "https://pub-cdn.sider.ai/u/U01AHE70X2G/web-coder/6886e9acf2d3a0ac8dcf27f0/resource/56542fb6-ffca-45e1-8754-d6c554777439.jpg",
    posts: 124,
    category: "视觉艺术"
  }
];

export default function Interests() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            生活<span className="text-blue-600">有趣</span>事
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            年过半百，依然对世界保持好奇。分享那些让生活更有趣、更有意义的事物。
          </p>
        </div>
        
        {/* 兴趣网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {interests.map((interest, index) => (
            <Card 
              key={interest.id}
              className={`group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 ${
                index % 2 === 0 ? 'md:translate-y-8' : ''
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={interest.image} 
                  alt={interest.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm p-3 rounded-xl text-blue-600">
                    {interest.icon}
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {interest.category}
                  </span>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {interest.title}
                  </CardTitle>
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {interest.posts} 篇文章
                  </span>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <CardDescription className="text-gray-600 mb-6 leading-relaxed text-base">
                  {interest.description}
                </CardDescription>
                
                <div className="flex gap-2">
                  <Link to="/blog" className="flex-1">
                    <Button 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors duration-300"
                    >
                      阅读更多
                    </Button>
                  </Link>
                  {interest.hasApp && (
                    <Button 
                      className="bg-amber-600 hover:bg-amber-700 text-white rounded-xl transition-colors duration-300 px-4"
                      onClick={() => window.open(interest.appUrl, '_blank')}
                    >
                      品茶工具
                    </Button>
                  )}
                  <Link to="/contact">
                    <Button 
                      variant="outline" 
                      className="bg-transparent border-2 border-blue-200 text-blue-600 hover:bg-blue-50 rounded-xl transition-colors duration-300 px-4"
                    >
                      订阅
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* 更多内容 */}
        <div className="text-center mt-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              还有更多精彩内容
            </h3>
            <p className="text-gray-600 mb-6">
              音乐欣赏、科技评测、生活感悟...每周都有新的分享
            </p>
            <Link to="/blog">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300"
              >
                探索全部内容
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
