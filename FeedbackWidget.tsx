/**
 * 用户反馈浮动组件
 * 提供快速反馈入口
 */
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Textarea } from './ui/textarea';
import { MessageCircle, X, Send, ThumbsUp, ThumbsDown, Heart } from 'lucide-react';

export default function FeedbackWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [feedbackType, setFeedbackType] = useState<'like' | 'dislike' | 'suggestion' | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!feedback.trim() || !feedbackType) return;
    
    // 这里可以添加实际的反馈提交逻辑
    console.log('反馈提交:', { type: feedbackType, content: feedback });
    
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsOpen(false);
      setFeedback('');
      setFeedbackType(null);
    }, 2000);
  };

  const feedbackTypes = [
    { id: 'like', label: '很棒', icon: <ThumbsUp className="w-4 h-4" />, color: 'bg-green-100 text-green-700 hover:bg-green-200' },
    { id: 'dislike', label: '有问题', icon: <ThumbsDown className="w-4 h-4" />, color: 'bg-red-100 text-red-700 hover:bg-red-200' },
    { id: 'suggestion', label: '建议', icon: <Heart className="w-4 h-4" />, color: 'bg-blue-100 text-blue-700 hover:bg-blue-200' }
  ];

  return (
    <>
      {/* 反馈按钮 */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 left-8 z-50 w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-all duration-300 hover:scale-110"
        size="sm"
      >
        <MessageCircle className="w-5 h-5" />
      </Button>

      {/* 反馈弹窗 */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md">
            <CardHeader className="flex flex-row items-center justify-between pb-3">
              <CardTitle className="text-lg">反馈建议</CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-gray-100 rounded-full"
              >
                <X className="w-4 h-4" />
              </Button>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">感谢您的反馈！</h3>
                  <p className="text-gray-600">您的意见对我们很重要</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      这个网站怎么样？
                    </label>
                    <div className="flex gap-2">
                      {feedbackTypes.map((type) => (
                        <button
                          key={type.id}
                          onClick={() => setFeedbackType(type.id as any)}
                          className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                            feedbackType === type.id 
                              ? type.color
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {type.icon}
                          {type.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      详细说明（可选）
                    </label>
                    <Textarea
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      placeholder="告诉海叔您的想法..."
                      rows={4}
                      className="resize-none"
                    />
                  </div>
                  
                  <Button
                    onClick={handleSubmit}
                    disabled={!feedbackType}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    发送反馈
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}
