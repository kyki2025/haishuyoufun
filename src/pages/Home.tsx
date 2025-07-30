/**
 * 海叔有FUN网站首页组件
 * 展示个人IP品牌、AI工具集合和兴趣分享内容
 */
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import AITools from '../components/AITools';
import Interests from '../components/Interests';
import About from '../components/About';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import Analytics from '../components/Analytics';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <SEO />
      <Analytics pageTitle="海叔有FUN - 首页" category="home" />
      <Navigation />
      <Hero />
      <AITools />
      <Interests />
      <About />
      <Footer />
    </div>
  );
}
