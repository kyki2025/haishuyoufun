/**
 * 标签云组件
 * 显示博客文章的所有标签
 */
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tag } from 'lucide-react';

const tags = [
  { name: 'AI工具', count: 12, color: 'bg-blue-100 text-blue-700 hover:bg-blue-200' },
  { name: '茶文化', count: 8, color: 'bg-amber-100 text-amber-700 hover:bg-amber-200' },
  { name: '日语学习', count: 6, color: 'bg-green-100 text-green-700 hover:bg-green-200' },
  { name: '生活感悟', count: 10, color: 'bg-purple-100 text-purple-700 hover:bg-purple-200' },
  { name: '技术分享', count: 9, color: 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200' },
  { name: '摄影日记', count: 5, color: 'bg-pink-100 text-pink-700 hover:bg-pink-200' },
  { name: '读书笔记', count: 7, color: 'bg-orange-100 text-orange-700 hover:bg-orange-200' },
  { name: '工具推荐', count: 4, color: 'bg-teal-100 text-teal-700 hover:bg-teal-200' }
];

export default function TagCloud() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Tag className="w-5 h-5 text-blue-600" />
          热门标签
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag.name}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${tag.color}`}
            >
              {tag.name}
              <span className="ml-1 text-xs opacity-75">({tag.count})</span>
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
