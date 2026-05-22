import type { Project } from '../types';
import { getImages } from '../index';

export const module: Project = {
  id: 'imp-telegram-bot',
  title: 'Telegram Bot',
  shortDescription: 'Универсальный Telegram-бот с MiniApp',
  description: `Универсальный бот на Node.js/TypeScript (grammY) на Serverless-архитектуре (Vercel).
Включает интеграцию погодных сервисов и MiniApp (Flag Connect),
который поддерживает темы Telegram и работает отдельно от бота.`,
  tags: ['all'],
  tech: ['telegram', 'nodejs', 'typescript'],
  externalLinks: [
    { name: 'GitHub', url: 'https://github.com/vdistortion/imp-telegram-bot' },
    { name: 'Bot', url: 'https://t.me/ImpTelegramBot' },
    { name: 'MiniApp', url: '/flag-connect/' },
  ],
  screenshots: getImages('imp-telegram-bot', {
    'cat.webp': '/cat',
    'flag_connect.webp': '/flag_connect',
    'flag_connect_settings.webp': 'Settings',
    'miniapp_1.webp': 'MiniApp',
    'miniapp_2.webp': 'MiniApp',
    'miniapp_settings.webp': 'MiniApp Settings',
  }),
};
