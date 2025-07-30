/**
 * 网站访问统计组件
 * 提供页面访问量统计和用户行为分析
 */
import React from 'react';

interface AnalyticsProps {
  pageTitle?: string;
  category?: string;
}

export default function Analytics({ pageTitle = document.title, category = 'page_view' }: AnalyticsProps) {
  
  React.useEffect(() => {
    // 记录页面访问
    const recordPageView = () => {
      const visitData = {
        page: pageTitle,
        category,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        referrer: document.referrer,
        url: window.location.href
      };

      // 存储到本地存储（实际项目中应该发送到后端）
      const existingData = JSON.parse(localStorage.getItem('analytics_data') || '[]');
      existingData.push(visitData);
      
      // 只保留最近1000条记录
      if (existingData.length > 1000) {
        existingData.splice(0, existingData.length - 1000);
      }
      
      localStorage.setItem('analytics_data', JSON.stringify(existingData));
      
      // 更新访问计数
      const pageKey = `visit_count_${encodeURIComponent(pageTitle)}`;
      const currentCount = parseInt(localStorage.getItem(pageKey) || '0');
      localStorage.setItem(pageKey, (currentCount + 1).toString());
    };

    recordPageView();

    // 记录页面停留时间
    const startTime = Date.now();
    
    const handleBeforeUnload = () => {
      const stayTime = Date.now() - startTime;
      const stayData = {
        page: pageTitle,
        stayTime: Math.round(stayTime / 1000), // 转换为秒
        timestamp: new Date().toISOString()
      };
      
      const existingStayData = JSON.parse(localStorage.getItem('stay_time_data') || '[]');
      existingStayData.push(stayData);
      
      if (existingStayData.length > 500) {
        existingStayData.splice(0, existingStayData.length - 500);
      }
      
      localStorage.setItem('stay_time_data', JSON.stringify(existingStayData));
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      handleBeforeUnload(); // 记录当前会话
    };
  }, [pageTitle, category]);

  return null;
}

/**
 * 获取页面访问统计数据
 */
export const getAnalyticsData = () => {
  const analyticsData = JSON.parse(localStorage.getItem('analytics_data') || '[]');
  const stayTimeData = JSON.parse(localStorage.getItem('stay_time_data') || '[]');
  
  // 统计各页面访问量
  const pageViews: { [key: string]: number } = {};
  analyticsData.forEach((item: any) => {
    pageViews[item.page] = (pageViews[item.page] || 0) + 1;
  });
  
  // 计算平均停留时间
  const avgStayTime: { [key: string]: number } = {};
  const stayTimeCounts: { [key: string]: number } = {};
  
  stayTimeData.forEach((item: any) => {
    if (!avgStayTime[item.page]) {
      avgStayTime[item.page] = 0;
      stayTimeCounts[item.page] = 0;
    }
    avgStayTime[item.page] += item.stayTime;
    stayTimeCounts[item.page]++;
  });
  
  Object.keys(avgStayTime).forEach(page => {
    avgStayTime[page] = Math.round(avgStayTime[page] / stayTimeCounts[page]);
  });
  
  return {
    totalViews: analyticsData.length,
    pageViews,
    avgStayTime,
    recentVisits: analyticsData.slice(-10).reverse()
  };
};
