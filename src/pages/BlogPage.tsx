/**
 * 博客页面
 * 展示海叔的生活分享文章
 */
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { 
  Coffee, 
  Languages, 
  Book, 
  Camera, 
  Music, 
  Heart,
  Eye,
  Clock,
  Calendar,
  Tag
} from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "五十岁开始学日语的心路历程",
    excerpt: "为什么我在50岁的年纪选择学习日语？这一路走来的收获和感悟...",
    content: "在这个AI时代，很多人觉得学习语言变得不那么重要了。但我想说，语言学习带给我的不仅仅是沟通能力，更是一种文化的体验和思维的拓展...",
    category: "日语学习",
    icon: <Languages className="w-6 h-6" />,
    image: "https://pub-cdn.sider.ai/u/U01AHE70X2G/web-coder/6886e9acf2d3a0ac8dcf27f0/resource/f848e569-f639-412f-8fce-c3a80d012102.jpg",
    publishDate: "2024-01-15",
    readTime: "8分钟",
    views: 1205,
    tags: ["日语", "学习心得", "文化体验"],
    featured: true
  },
  {
    id: 2,
    title: "品茶悟道：从龙井到普洱的茶文化之旅",
    excerpt: "每一杯茶都有自己的故事，让我带你走进中华茶文化的精彩世界...",
    content: "茶，不仅仅是一种饮品，更是一种生活态度。从杭州的西湖龙井到云南的普洱茶，每一种茶都承载着深厚的文化内涵...",
    category: "茶文化",
    icon: <Coffee className="w-6 h-6" />,
    image: "https://pub-cdn.sider.ai/u/U01AHE70X2G/web-coder/6886e9acf2d3a0ac8dcf27f0/resource/93b4446f-7cc9-4c61-b58f-ca25835ebc29.jpg",
    publishDate: "2024-01-20",
    readTime: "6分钟",
    views: 892,
    tags: ["茶文化", "生活美学", "传统文化"],
    featured: true
  },
  {
    id: 3,
    title: "AI工具如何改变我的日常工作效率",
    excerpt: "作为一个50岁的大叔，我是如何拥抱AI技术，让它成为我的得力助手的...",
    content: "很多人问我，为什么一个50岁的人要这么关注AI工具？答案很简单：因为它们真的能让生活变得更简单、更高效...",
    category: "AI分享",
    icon: <Book className="w-6 h-6" />,
    image: "https://pub-cdn.sider.ai/u/U01AHE70X2G/web-coder/6886e9acf2d3a0ac8dcf27f0/resource/b94be67d-105b-4df4-bb02-fc1147ce173d.jpg",
    publishDate: "2024-01-25",
    readTime: "10分钟",
    views: 1543,
    tags: ["AI工具", "效率提升", "科技生活"],
    featured: false
  },
  {
    id: 4,
    title: "摄影日记：用镜头记录生活中的美好",
    excerpt: "不需要昂贵的设备，只需要一颗发现美的心。分享我的摄影心得...",
    content: "摄影对我来说，不是技术的炫耀，而是对生活的记录和思考。每一张照片背后都有一个故事...",
    category: "摄影分享",
    icon: <Camera className="w-6 h-6" />,
    image: "https://pub-cdn.sider.ai/u/U01AHE70X2G/web-coder/6886e9acf2d3a0ac8dcf27f0/resource/5d0197f1-47fe-4ea2-82d4-e7186c9b6d29.jpg",
    publishDate: "2024-02-01",
    readTime: "5分钟",
    views: 667,
    tags: ["摄影", "生活记录", "美学"],
    featured: false
  },
  {
    id: 5,
    title: "中年大叔的音乐启蒙：从古典到现代",
    excerpt: "音乐没有年龄界限，分享我最近发现的一些好音乐和背后的故事...",
    content: "很多人以为过了50岁就不会再有新的音乐喜好了，但我想说，音乐的魅力就在于它能跨越年龄的界限...",
    category: "音乐分享",
    icon: <Music className="w-6 h-6" />,
    image: "https://pub-cdn.sider.ai/u/U01AHE70X2G/web-coder/6886e9acf2d3a0ac8dcf27f0/resource/bca1f551-9955-4f58-8bc9-aec463ee5a55.jpg",
    publishDate: "2024-02-05",
    readTime: "7分钟",
    views: 423,
    tags: ["音乐", "生活感悟", "文化欣赏"],
    featured: false
  }
];

const categories = ["全部", "日语学习", "茶文化", "AI分享", "摄影分享", "音乐分享"];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("全部");

  const filteredPosts = selectedCategory === "全部" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            海叔的<span className="text-blue-600">生活分享</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            50岁大叔的数字生活实验室，分享那些让生活更有趣、更有意义的事物。
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            ✨ 精选文章
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Card 
                key={post.id}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border-2 border-yellow-200"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/90 backdrop-blur-sm p-2 rounded-lg text-blue-600">
                      {post.icon}
                    </div>
                  </div>
                  <Badge className="absolute top-4 right-4 bg-yellow-500 text-yellow-900">
                    精选
                  </Badge>
                </div>
                
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.publishDate}</span>
                    <Clock className="w-4 h-4 ml-2" />
                    <span>{post.readTime}</span>
                    <Eye className="w-4 h-4 ml-2" />
                    <span>{post.views} 次阅读</span>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl">
                    阅读全文
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
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
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card 
                key={post.id}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <div className="bg-white/90 backdrop-blur-sm p-2 rounded-lg text-blue-600">
                      {post.icon}
                    </div>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                    <span>{post.category}</span>
                    <span>{post.publishDate}</span>
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {post.views}
                      </span>
                    </div>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                      阅读
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">
            订阅海叔的生活分享
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            每周收到最新的文章和生活感悟，与海叔一起探索生活的美好
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="输入您的邮箱"
              className="flex-1 px-4 py-3 rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold px-8 py-3 rounded-xl">
              订阅
            </Button>
          </div>
          <p className="text-blue-200 text-sm mt-4">
            放心，海叔不会发送垃圾邮件 😊
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
