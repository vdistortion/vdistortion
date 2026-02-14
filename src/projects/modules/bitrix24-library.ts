import type { TypeModule } from '../types';

export const module: TypeModule = {
  code: 'bitrix24-library',
  name: 'SDK',
  description: 'TypeScript SDK для асинхронной работы с REST API Bitrix24',
  detail: `
Переработал callback-ориентированный API в современный promise-based интерфейс, добавляющий типы и удобные методы.
Реализовал продвинутую обработку пакетных запросов, что критично для производительности enterprise-приложений.
Библиотека изначально выделена из шаблона bitrix24-create-app для повторного использования. Основные преимущества:
полная типизация, простая обработка батч-запросов и стабильный API. Используется как зависимость в шаблонах
bitrix24-create-app и рекомендуется для всех моих UI-библиотек под Bitrix24, обеспечивая согласованность и надежность
кода.
`,
  repos: [
    {
      name: 'GitHub',
      url: 'bitrix24-library',
    },
    {
      name: 'npmjs',
      url: 'bitrix24-library',
    },
  ],
  links: [
    {
      name: 'Docs',
      url: '/bitrix24-library/',
    },
  ],
  tags: ['all'],
  tech: ['bitrix24', 'npm', 'vite', 'vitepress', 'typescript'],
  imageNames: {
    'README.webp': 'Документация',
  },
};
