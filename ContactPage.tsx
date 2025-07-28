/**
 * 联系页面组件
 * 提供多种联系方式和联系表单
 */
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import Analytics from '../components/Analytics';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { 
  Mail, 
  MessageCircle, 
  Github, 
  Twitter, 
  MapPin, 
  Clock, 
  Coffee,
  Send,
  CheckCircle,
  Heart
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 这里可以添加实际的表单提交逻辑
    console.log('表单提交:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactMethods = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "邮箱联系",
      description: "工作日24小时内回复",
      value: "hello@haishu.fun",
      action: "mailto:hello@haishu.fun",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "微信交流",
      description: "扫码加入海叔交流群",
      value: "微信群二维码",
      action: "#",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Github className="w-8 h-8" />,
      title: "GitHub",
      description: "查看开源项目和代码",
      value: "github.com/haishu",
      action: "https://github.com",
      color: "from-gray-500 to-gray-600"
    },
    {
      icon: <Twitter className="w-8 h-8" />,
      title: "社交媒体",
      description: "关注最新动态",
      value: "@haishu_fun",
      action: "https://twitter.com",
      color: "from-blue-400 to-blue-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <SEO 
        title="联系海叔 - 海叔有FUN"
        description="联系海叔，交流AI工具开发、茶文化、日语学习等话题。多种联系方式，期待与您的交流。"
        keywords="联系海叔,交流,AI工具,茶文化,合作"
      />
      <Analytics pageTitle="联系海叔" category="contact" />
      <Navigation />
      
      {/* Hero区域 */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            联系<span className="text-blue-600">海叔</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            期待与您交流AI工具、茶文化、生活感悟... 让我们一起让生活更有趣！
          </p>
          <div className="flex items-center justify-center gap-2 text-blue-600">
            <Coffee className="w-5 h-5" />
            <span className="text-lg">随时欢迎一起品茶聊天</span>
            <Coffee className="w-5 h-5" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* 左侧联系方式 */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">联系方式</h2>
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${method.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">{method.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">{method.description}</p>
                        <a 
                          href={method.action}
                          className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
                        >
                          {method.value}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* 个人信息卡片 */}
            <Card className="mt-8 bg-gradient-to-br from-blue-50 to-indigo-100 border-0">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    海叔
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">海叔</h3>
                    <p className="text-gray-600">50岁 · AI工具开发者</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    <span>上海，在线交流无地域限制</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span>通常在工作日回复，周末也会查看消息</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-red-500" />
                    <span>喜欢和同道中人交流分享</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 右侧联系表单 */}
          <div className="lg:col-span-2">
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">发送消息</CardTitle>
                <CardDescription className="text-gray-600">
                  有什么想法或问题，随时可以给我留言。我会认真回复每一条消息。
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">消息发送成功！</h3>
                    <p className="text-gray-600">感谢您的留言，我会尽快回复您。</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          姓名 *
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="请输入您的姓名"
                          required
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          邮箱 *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="请输入您的邮箱"
                          required
                          className="w-full"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        主题 *
                      </label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="请输入消息主题"
                        required
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        消息内容 *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="请输入您想说的话..."
                        rows={6}
                        required
                        className="w-full resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-xl transition-all duration-300"
                    >
                      发送消息
                      <Send className="w-5 h-5 ml-2" />
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* 常见问题 */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">常见问题</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">🤖 可以定制AI工具吗？</h4>
                    <p className="text-gray-600 text-sm">当然可以！我很乐意根据您的需求开发专属的AI工具，欢迎详细描述您的想法。</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">🍵 如何加入品茶交流群？</h4>
                    <p className="text-gray-600 text-sm">请通过微信联系我，我会邀请您加入我们的品茶爱好者交流群。</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">📝 可以投稿或合作吗？</h4>
                    <p className="text-gray-600 text-sm">非常欢迎！如果您有好的内容或想法，我们可以一起探讨合作的可能性。</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">⏰ 多久会回复消息？</h4>
                    <p className="text-gray-600 text-sm">工作日通常24小时内回复，周末可能会稍慢一些，但我会尽快回复每一条消息。</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
