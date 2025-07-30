/**
 * 社交分享组件
 * 提供多平台内容分享功能
 */
import React from 'react';
import { Button } from './ui/button';
import { Share2, Copy, MessageCircle, Mail } from 'lucide-react';

interface SocialShareProps {
  title: string;
  description?: string;
  url?: string;
  className?: string;
}

export default function SocialShare({ 
  title, 
  description = '', 
  url = window.location.href,
  className = ''
}: SocialShareProps) {
  
  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: description,
          url
        });
      } catch (error) {
        console.log('分享取消或失败');
      }
    } else {
      // 回退到复制链接
      handleCopyLink();
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      // 这里可以添加toast提示
      alert('链接已复制到剪贴板！');
    } catch (error) {
      console.error('复制失败:', error);
    }
  };

  const handleWeChatShare = () => {
    // 微信分享需要通过微信JS-SDK，这里显示提示
    alert('请复制链接在微信中分享，或长按识别二维码分享');
  };

  const handleEmailShare = () => {
    const subject = encodeURIComponent(`推荐阅读：${title}`);
    const body = encodeURIComponent(`我发现了一篇有趣的文章，推荐给你：\n\n${title}\n\n${description}\n\n链接：${url}\n\n来自海叔有FUN`);
    window.open(`mailto:?subject=${subject}&body=${body}`);
  };

  const shareButtons = [
    {
      icon: <Share2 className="w-4 h-4" />,
      label: '系统分享',
      onClick: handleNativeShare,
      available: !!navigator.share
    },
    {
      icon: <Copy className="w-4 h-4" />,
      label: '复制链接',
      onClick: handleCopyLink,
      available: true
    },
    {
      icon: <MessageCircle className="w-4 h-4" />,
      label: '微信分享',
      onClick: handleWeChatShare,
      available: true
    },
    {
      icon: <Mail className="w-4 h-4" />,
      label: '邮件分享',
      onClick: handleEmailShare,
      available: true
    }
  ];

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {shareButtons
        .filter(button => button.available)
        .map((button, index) => (
          <Button
            key={index}
            variant="outline"
            size="sm"
            onClick={button.onClick}
            className="bg-transparent hover:bg-gray-50"
          >
            {button.icon}
            <span className="ml-2 hidden sm:inline">{button.label}</span>
          </Button>
        ))}
    </div>
  );
}
