/**
 * SEO优化组件
 * 提供页面meta标签和结构化数据支持
 */
import React from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishDate?: string;
}

export default function SEO({
  title = "海叔有FUN - 50岁大叔的数字生活实验室",
  description = "海叔有FUN(haishu.fun)是50岁大叔的个人IP网站，分享实用AI工具、茶文化、日语学习等有趣内容。有趣·有范·有料的生活方式分享平台。",
  keywords = "海叔有FUN,AI工具,茶文化,日语学习,生活分享,中年学习,数字生活,haishu.fun",
  image = "https://pub-cdn.sider.ai/u/U01AHE70X2G/web-coder/6886e9acf2d3a0ac8dcf27f0/resource/721cdd5e-6aaa-4496-833f-f2132c690946.jpg",
  url = "https://haishu.fun",
  type = "website",
  author = "海叔",
  publishDate
}: SEOProps) {
  
  React.useEffect(() => {
    // 更新页面标题
    document.title = title;
    
    // 更新或创建meta标签
    const updateMeta = (name: string, content: string, property?: boolean) => {
      const attribute = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    // 基础SEO标签
    updateMeta('description', description);
    updateMeta('keywords', keywords);
    updateMeta('author', author);
    
    // Open Graph标签
    updateMeta('og:title', title, true);
    updateMeta('og:description', description, true);
    updateMeta('og:image', image, true);
    updateMeta('og:url', url, true);
    updateMeta('og:type', type, true);
    updateMeta('og:site_name', '海叔有FUN', true);
    
    // Twitter Card标签
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', image);
    
    // 额外的SEO标签
    updateMeta('robots', 'index, follow');
    updateMeta('viewport', 'width=device-width, initial-scale=1.0');
    
    if (publishDate) {
      updateMeta('article:published_time', publishDate, true);
      updateMeta('article:author', author, true);
    }

    // 结构化数据
    const structuredData = {
      "@context": "https://schema.org",
      "@type": type === "article" ? "Article" : "WebSite",
      "name": title,
      "description": description,
      "url": url,
      "author": {
        "@type": "Person",
        "name": author,
        "description": "50岁大叔，AI工具收集家，茶文化爱好者"
      },
      "publisher": {
        "@type": "Organization",
        "name": "海叔有FUN",
        "logo": {
          "@type": "ImageObject",
          "url": "https://pub-cdn.sider.ai/u/U01AHE70X2G/web-coder/6886e9acf2d3a0ac8dcf27f0/resource/3e16ad1c-9779-4af0-b6b6-34a2a1319013.jpg"
        }
      },
      "image": image,
      ...(publishDate && { "datePublished": publishDate }),
      ...(type === "article" && {
        "headline": title,
        "articleBody": description
      })
    };

    // 添加或更新结构化数据
    let scriptTag = document.querySelector('#structured-data') as HTMLScriptElement;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'structured-data';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData);

  }, [title, description, keywords, image, url, type, author, publishDate]);

  return null;
}
