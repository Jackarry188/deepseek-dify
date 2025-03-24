import type { AppInfo } from '@/types/app'
export const APP_ID = `${process.env.NEXT_PUBLIC_APP_ID}`
export const API_KEY = `${process.env.NEXT_PUBLIC_APP_KEY}`
export const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`
export const APP_INFO: AppInfo = {
  title: '经济与管理学院学生就业小助手',
  description: '基于本地模型与RAG就业知识库构建的学生就业指导小助手',
  copyright: 'Powered by kk',
  privacy_policy: '本网站的部分内容由人工智能技术生成，我们尽力确保内容的准确性和可靠性，但由于AI技术的局限性，生成的内容可能包含错误、不完整或过时的信息。用户在使用这些内容时，应自行判断其适用性，并结合其他可靠来源进行验证。本网站不对因依赖AI生成内容所导致的任何直接或间接后果承担责任。如有重要决策，建议咨询相关领域的专业人士。',
  default_language: 'zh-Hans',
}

export const isShowPrompt = false
export const promptTemplate = '我想让你扮演一个就业指导助手'

export const API_PREFIX = '/api'

export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 48
