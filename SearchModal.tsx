/**
 * 全站搜索模态框组件
 * 提供全站内容搜索功能
 */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent } from './ui/card';
import { 
  Search, 
  X, 
  FileText, 
  Coffee, 
  Book, 
  Wrench,
  Clock,
  TrendingUp
} from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// 模拟搜索数据
const searchData = [
  { id: 1, title: 'PDF转换器使用指南', type: 'tool', path: '/ai-tools', icon: <Wrench className="w-4 h-4" /> },
  { id: 2, title: '品茶记录工具介绍', type: 'tool', path: '/ai-tools', icon: <Coffee className="w-4 h-4" /> },
  { id: 3, title: '龙井茶品鉴心得', type: 'blog', path: '/blog/1', icon: <Book className="w-4 h-4" /> },
  { id: 4, title: 'AI工具开发经验分享', type: 'blog', path: '/blog/2', icon: <FileText className="w-4 h-4" /> },
  { id: 5, title: '日语学习方法总结', type: 'blog', path: '/blog/3', icon: <Book className="w-4 h-4" /> },
  { id: 6, title: '50岁学编程的感悟', type: 'blog', path: '/blog/4', icon: <FileText className="w-4 h-4" /> }
];

const hotSearches = ['PDF转换', '品茶记录', '日语学习', 'AI工具', '茶文化'];

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<typeof searchData>([]);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // 从localStorage获取最近搜索
    const recent = JSON.parse(localStorage.getItem('recent_searches') || '[]');
    setRecentSearches(recent);
  }, []);

  useEffect(() => {
    if (query.trim()) {
      const filtered = searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [query]);

  const handleSearch = (searchQuery: string) => {
    if (!searchQuery.trim()) return;
    
    // 保存到最近搜索
    const recent = [searchQuery, ...recentSearches.filter(s => s !== searchQuery)].slice(0, 5);
    setRecentSearches(recent);
    localStorage.setItem('recent_searches', JSON.stringify(recent));
    
    // 这里可以添加真实的搜索逻辑
    console.log('搜索：', searchQuery);
  };

  const handleResultClick = (item: typeof searchData[0]) => {
    navigate(item.path);
    handleSearch(query);
    onClose();
  };

  const handleQuickSearch = (searchTerm: string) => {
    setQuery(searchTerm);
    handleSearch(searchTerm);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4 max-h-[80vh] overflow-hidden">
        {/* 搜索头部 */}
        <div className="p-6 border-b">
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="搜索工具、文章、话题..."
                className="pl-12 pr-4 h-12 text-lg rounded-xl border-2 focus:border-blue-500"
                autoFocus
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSearch(query);
                  }
                }}
              />
            </div>
            <Button
              onClick={onClose}
              variant="ghost"
              size="sm"
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* 搜索内容 */}
        <div className="max-h-96 overflow-y-auto">
          {query.trim() ? (
            // 搜索结果
            <div className="p-6">
              {results.length > 0 ? (
                <>
                  <h3 className="text-sm font-medium text-gray-500 mb-4">
                    找到 {results.length} 个结果
                  </h3>
                  <div className="space-y-2">
                    {results.map((item) => (
                      <Card
                        key={item.id}
                        className="cursor-pointer hover:shadow-md transition-all duration-200 hover:bg-blue-50"
                        onClick={() => handleResultClick(item)}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="text-blue-600">
                              {item.icon}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium text-gray-900">{item.title}</h4>
                              <p className="text-sm text-gray-500 capitalize">{item.type}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">没有找到相关内容</h3>
                  <p className="text-gray-500">试试其他关键词，或者浏览热门搜索</p>
                </div>
              )}
            </div>
          ) : (
            // 默认状态
            <div className="p-6 space-y-6">
              {/* 热门搜索 */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-orange-500" />
                  <h3 className="font-medium text-gray-900">热门搜索</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {hotSearches.map((term) => (
                    <Button
                      key={term}
                      variant="outline"
                      size="sm"
                      className="rounded-full text-sm"
                      onClick={() => handleQuickSearch(term)}
                    >
                      {term}
                    </Button>
                  ))}
                </div>
              </div>

              {/* 最近搜索 */}
              {recentSearches.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-5 h-5 text-blue-500" />
                    <h3 className="font-medium text-gray-900">最近搜索</h3>
                  </div>
                  <div className="space-y-2">
                    {recentSearches.map((term, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
                        onClick={() => handleQuickSearch(term)}
                      >
                        <span className="text-gray-700">{term}</span>
                        <Search className="w-4 h-4 text-gray-400" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
