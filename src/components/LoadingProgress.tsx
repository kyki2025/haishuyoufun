/**
 * 页面加载进度条组件
 * 在路由切换时显示加载进度
 */
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';

export default function LoadingProgress() {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    setProgress(0);

    // 模拟加载进度
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 90) {
          clearInterval(timer);
          setTimeout(() => {
            setProgress(100);
            setTimeout(() => {
              setLoading(false);
              setProgress(0);
            }, 200);
          }, 100);
          return prev;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [location]);

  if (!loading) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
      <div 
        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
