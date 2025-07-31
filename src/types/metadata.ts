/**
 * SEO元数据类型定义
 */
export interface Metadata {
  title: string;
  description: string;
  keywords?: string;
  author?: string;
  ogImage?: string;
  ogType?: string;
  ogUrl?: string;
  twitterCard?: string;
  twitterCreator?: string;
}