import type { TypeModule } from '../types';

export const module: TypeModule = {
  code: 'imp-telegram-bot',
  name: 'Telegram Bot',
  description: 'Универсальный Telegram-бот с MiniApp',
  detail: `
Универсальный Telegram-бот на Node.js/TypeScript (grammY). Playground для экспериментов с Bot API. Работает на
Serverless-архитектуре (Vercel). Включает интеграцию погодных сервисов и генерацию контента. Также есть MiniApp
(Flag Connect), который может подхватывать темы телеграма, а также использоваться отдельно от бота.
`,
  repos: [
    {
      name: 'GitHub',
      url: 'imp-telegram-bot',
    },
  ],
  links: [
    {
      name: 'Bot',
      url: 'https://t.me/ImpTelegramBot',
    },
    {
      name: 'MiniApp',
      url: '/flag-connect/',
    },
  ],
  tags: ['all'],
  tech: ['telegram', 'nodejs', 'typescript'],
  imageNames: {
    'cat.webp': '/cat',
    'flag_connect.webp': '/flag_connect',
    'flag_connect_settings.webp': 'Settings',
    'miniapp_1.webp': 'MiniApp',
    'miniapp_2.webp': 'MiniApp',
    'miniapp_settings.webp': 'MiniApp Settings',
  },
};
