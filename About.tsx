/**
 * 关于海叔组件
 * 展示个人简介和联系方式
 */
import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Mail, MessageCircle, Github, Twitter, Heart, Star } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 左侧头像和基本信息 */}
          <div className="text-center lg:text-left">
            <div className="relative inline-block mb-8">
              <div className="w-48 h-48 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                海叔
              </div>
              <div className="absolute -bottom-2 -right-2 bg-yellow-400 p-3 rounded-full shadow-lg">
                <Star className="w-6 h-6 text-white fill-current" />
              </div>
            </div>
            
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              你好，我是海叔 👋
            </h3>
            
            <div className="space-y-3 text-lg text-gray-600 mb-8">
              <p className="flex items-center justify-center lg:justify-start gap-2">
                🎂 <span>50岁 · 永远年轻的心</span>
              </p>
              <p className="flex items-center justify-center lg:justify-start gap-2">
                🌊 <span>名字带海，心向大海</span>
              </p>
              <p className="flex items-center justify-center lg:justify-start gap-2">
                🤖 <span>AI工具收集家</span>
              </p>
              <p className="flex items-center justify-center lg:justify-start gap-2">
                🍵 <span>茶文化爱好者</span>
              </p>
            </div>
            
            {/* 社交媒体链接 */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 rounded-full">
                <Mail className="w-4 h-4 mr-2" />
                邮箱
              </Button>
              <Button size="sm" variant="outline" className="bg-transparent rounded-full">
                <MessageCircle className="w-4 h-4 mr-2" />
                微信
              </Button>
              <Button size="sm" variant="outline" className="bg-transparent rounded-full">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            </div>
          </div>
          
          {/* 右侧详细介绍 */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-0">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Heart className="w-6 h-6 text-red-500" />
                  我的故事
                </h4>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    年过半百，却依然对这个世界充满好奇。我相信科技能让生活更美好，
                    也相信传统文化有着永恒的魅力。
                  </p>
                  <p>
                    在这个AI时代，我热衷于发现和分享那些真正有用的工具，
                    让科技为我们的生活添彩。同时，我也深爱着茶文化的博大精深，
                    正在学习日语，探索不同文化的智慧。
                  </p>
                  <p>
                    <span className="font-semibold text-blue-600">海叔有FUN</span> 不仅仅是一个网站，
                    更是一种生活态度——保持好奇，拥抱变化，让每一天都充满乐趣。
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-0">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  🎯 我的使命
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>分享实用的AI工具，让科技服务于生活</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>传播有趣的知识和文化，让学习变得愉快</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>记录生活中的美好，与大家一起成长</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>证明年龄从不是学习和探索的障碍</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
