/**
 * 博客文章详情页面组件
 * 展示单篇文章的完整内容和相关信息
 */
import React from 'react';
import { useParams, Link } from 'react-router';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import Analytics from '../components/Analytics';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Eye, 
  Heart, 
  Share2, 
  Coffee,
  Languages,
  Book,
  Camera
} from 'lucide-react';

// 模拟文章数据
const articleData = {
  '1': {
    title: '龙井茶的品鉴之道：从茶叶到茶韵的完整体验',
    content: `
      <h2>前言</h2>
      <p>作为一个50岁的茶文化爱好者，我对龙井茶有着特殊的情感。今天想和大家分享一下我这些年来对龙井茶品鉴的心得体会。</p>
      
      <h2>龙井茶的历史与产地</h2>
      <p>龙井茶产于浙江杭州西湖一带，有着1200多年的历史。西湖龙井、钱塘龙井、越州龙井是三大主要产区，其中西湖龙井品质最为上乘。</p>
      
      <h2>品鉴要点</h2>
      <h3>1. 观形</h3>
      <p>优质龙井茶外形扁平光滑，挺直尖削，色泽嫩绿光润。茶叶大小均匀，无碎茶和茶梗。</p>
      
      <h3>2. 闻香</h3>
      <p>干茶应有清香或嫩栗香，无异味。冲泡后香气清高持久，有独特的豆花香。</p>
      
      <h3>3. 品味</h3>
      <p>滋味甘醇鲜爽，回甘明显。优质龙井茶入口甘甜，无苦涩味，喉韵清香。</p>
      
      <h2>冲泡技巧</h2>
      <p>水温控制在80-85℃，茶水比例1:50，冲泡时间2-3分钟。使用玻璃杯可以更好地欣赏茶叶在水中的美姿。</p>
      
      <h2>结语</h2>
      <p>品茶如品人生，需要用心体会。希望大家都能在龙井茶的清香中找到内心的宁静与美好。</p>
    `,
    category: '茶文化',
    author: '海叔',
    publishDate: '2024-01-15',
    readTime: '5分钟',
    views: 1248,
    likes: 89,
    tags: ['龙井茶', '品茶', '茶文化', '生活美学'],
    icon: <Coffee className="w-6 h-6" />,
    image: 'https://pub-cdn.sider.ai/u/U01AHE70X2G/web-coder/6886e9acf2d3a0ac8dcf27f0/resource/fb89455c-ce12-4844-96e4-50d6289d0a4c.jpg'
  },
  '2': {
    title: '五十岁学日语：我的学习方法与心得分享',
    content: `
      <h2>为什么五十岁开始学日语？</h2>
      <p>很多人问我，都五十岁了，为什么还要学日语？我的答案很简单：因为好奇心和对日本文化的热爱。年龄从来不是学习的障碍。</p>
      
      <h2>我的学习方法</h2>
      <h3>1. 制定合理的学习计划</h3>
      <p>每天固定1小时学习时间，分为30分钟基础语法，20分钟听力练习，10分钟复习。坚持比强度更重要。</p>
      
      <h3>2. 利用科技工具</h3>
      <p>推荐几个我常用的APP：</p>
      <ul>
        <li>Duolingo - 基础入门</li>
        <li>Anki - 单词记忆</li>
        <li>NHK Easy - 新闻听力</li>
        <li>HelloTalk - 语言交换</li>  
      </ul>
      
      <h3>3. 文化沉浸式学习</h3>
      <p>通过日剧、动漫、日本音乐来学习，让学习变得有趣。我特别推荐《深夜食堂》和《孤独的美食家》。</p>
      
      <h2>学习中的困难与解决</h2>
      <p>年纪大了记忆力确实不如年轻人，但我发现理解力和逻辑思维能力更强了。通过联想记忆和规律总结，效果很好。</p>
      
      <h2>一年后的收获</h2>
      <p>现在我已经能够进行基本的日常对话，阅读简单的日文文章。更重要的是，通过学习日语，我对日本文化有了更深的理解。</p>
      
      <h2>给同龄人的建议</h2>
      <p>永远不要因为年龄而放弃学习新东西。学习不仅能让大脑保持活力，更能让生活充满乐趣和成就感。</p>
    `,
    category: '语言学习',
    author: '海叔',
    publishDate: '2024-01-10',
    readTime: '8分钟',
    views: 2156,
    likes: 156,
    tags: ['日语学习', '语言学习', '自我提升', '中年学习'],
    icon: <Languages className="w-6 h-6" />,
    image: 'https://pub-cdn.sider.ai/u/U01AHE70X2G/web-coder/6886e9acf2d3a0ac8dcf27f0/resource/6bf359ed-a46a-4096-8358-3b7e42f08de6.jpg'
  }
};

export default function BlogDetailPage() {
  const { id } = useParams();
  const article = articleData[id as keyof typeof articleData];

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="pt-20 pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">文章未找到</h1>
            <Link to="/blog">
              <Button>返回博客</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: '来自海叔有FUN的精彩文章',
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('链接已复制到剪贴板');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title={`${article.title} - 海叔有FUN`}
        description={article.content.replace(/<[^>]*>/g, '').substring(0, 160) + '...'}
        keywords={article.tags.join(', ')}
        image={article.image}
        type="article"
        author={article.author}
        publishDate={article.publishDate}
      />
      <Analytics 
        pageTitle={article.title} 
        category="blog_article" 
      />
      <Navigation />
      
      <article className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* 返回按钮 */}
          <div className="mb-8">
            <Link to="/blog">
              <Button variant="outline" className="bg-transparent">
                <ArrowLeft className="w-4 h-4 mr-2" />
                返回博客
              </Button>
            </Link>
          </div>

          {/* 文章头部 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
            <div className="relative h-64 md:h-80">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <Badge className="mb-4 bg-blue-600">
                  {article.category}
                </Badge>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  {article.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-white/90 text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{article.publishDate}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>{article.views} 阅读</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    <span>{article.likes} 喜欢</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 文章内容 */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <Card>
                <CardContent className="p-8">
                  <div 
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                    style={{
                      lineHeight: '1.8',
                      fontSize: '16px'
                    }}
                  />
                  
                  {/* 标签 */}
                  <div className="mt-8 pt-8 border-t">
                    <h3 className="text-lg font-semibold mb-4">相关标签</h3>
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-blue-600 border-blue-200">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* 分享按钮 */}
                  <div className="mt-8 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Button 
                        variant="outline" 
                        className="bg-transparent"
                        onClick={handleShare}
                      >
                        <Share2 className="w-4 h-4 mr-2" />
                        分享文章
                      </Button>
                      <Button variant="outline" className="bg-transparent">
                        <Heart className="w-4 h-4 mr-2" />
                        点赞 ({article.likes})
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 侧边栏 */}
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">作者信息</h3>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      海叔
                    </div>
                    <div>
                      <p className="font-medium">海叔</p>
                      <p className="text-sm text-gray-600">50岁的生活探索者</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    分享AI工具、茶文化、日语学习等有趣内容
                  </p>
                  <Link to="/contact">
                    <Button className="w-full">关注海叔</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">相关文章</h3>
                  <div className="space-y-4">
                    {Object.entries(articleData)
                      .filter(([key]) => key !== id)
                      .slice(0, 2)
                      .map(([key, relatedArticle]) => (
                        <Link key={key} to={`/blog/${key}`}>
                          <div className="group cursor-pointer">
                            <h4 className="text-sm font-medium group-hover:text-blue-600 transition-colors mb-2">
                              {relatedArticle.title}
                            </h4>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                              {relatedArticle.icon}
                              <span>{relatedArticle.category}</span>
                            </div>
                          </div>
                        </Link>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
