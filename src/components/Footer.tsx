/**
 * 网站底部组件
 * 包含版权信息和相关链接
 */
import React from 'react';
import { Heart, Coffee, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* 主要内容区域 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* 品牌信息 */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">海叔有FUN</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              50岁大叔的数字生活实验室<br />
              有趣 · 有范 · 有料
            </p>
            <div className="flex items-center justify-center md:justify-start gap-1 text-gray-400">
              <Coffee className="w-4 h-4" />
              <span className="text-sm">haishu.fun</span>
            </div>
          </div>
          
          {/* 快速链接 */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4 text-gray-200">探索更多</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">AI工具箱</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">茶文化</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">日语学习</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">生活分享</a></li>
            </ul>
          </div>
          
          {/* 联系方式 */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4 text-gray-200">保持联系</h4>
            <div className="space-y-2 text-gray-300">
              <p>📧 hello@haishu.fun</p>
              <p>💬 微信交流群</p>
              <p>🐦 关注动态</p>
            </div>
          </div>
        </div>
        
        {/* 分割线 */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* 版权信息 */}
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>© 2024 海叔有FUN</span>
              <span>·</span>
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>by 海叔</span>
            </div>
            
            {/* 装饰元素 */}
            <div className="flex items-center gap-2 text-gray-500">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm">让生活更有趣</span>
              <Sparkles className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
