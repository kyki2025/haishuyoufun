/**
 * 首页Hero区域组件
 * 展示海叔有FUN品牌介绍和核心理念
 */
import React from 'react';
import { Link } from 'react-router';
import { Button } from './ui/button';
import { Waves, Sparkles, Coffee, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800" />
      <div className="absolute inset-0 bg-black/20" />
      
      {/* 浮动装饰元素 */}
      <div className="absolute top-20 left-10 text-blue-300/30 animate-bounce">
        <Waves size={48} />
      </div>
      <div className="absolute top-32 right-20 text-blue-300/30 animate-pulse">
        <Sparkles size={36} />
      </div>
      <div className="absolute bottom-32 left-20 text-blue-300/30 animate-bounce delay-700">
        <Coffee size={40} />
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* 主标题 */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
            海叔<span className="text-yellow-400">有FUN</span>
          </h1>
          <div className="flex items-center justify-center gap-2 text-xl md:text-2xl text-blue-200 mb-6">
            <Zap className="text-yellow-400" size={24} />
            <span>haishu.fun</span>
            <Zap className="text-yellow-400" size={24} />
          </div>
        </div>
        
        {/* 副标题 */}
        <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
          50岁大叔的数字生活实验室<br />
          <span className="text-yellow-300 font-semibold">有趣 · 有范 · 有料</span>
        </p>
        
        {/* 特色标签 */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white font-medium">
            🤖 AI工具开发者
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white font-medium">
            🍵 品茶记录专家
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white font-medium">
            🇯🇵 日语学习者
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white font-medium">
            ✨ 生活美学家
          </div>
        </div>
        
        {/* 行动按钮 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/ai-tools">
            <Button 
              size="lg" 
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              探索AI工具
            </Button>
          </Link>
          <Link to="/contact">
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-800 font-semibold text-lg px-8 py-4 rounded-full transition-all duration-300"
            >
              了解更多
            </Button>
          </Link>
        </div>
        
        {/* 滚动提示 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">继续探索</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
