import type { Project } from '../types';
import { getImages } from '../index';

export const module: Project = {
  id: 'bitrix24-library',
  title: 'SDK',
  shortDescription: 'TypeScript SDK для асинхронной работы с REST API Bitrix24',
  description: `Переработал callback-ориентированный API в современный promise-based интерфейс с типами.
Реализована продвинутая обработка пакетных запросов, критичная для production enterprise-приложений.
Используется как зависимость в шаблонах bitrix24-create-app.`,
  tech: ['Bitrix24', 'npm', 'Vite', 'VitePress', 'TypeScript'],
  externalLinks: [
    { name: 'GitHub', url: 'https://github.com/vdistortion/bitrix24-library' },
    { name: 'npmjs', url: 'https://www.npmjs.com/package/bitrix24-library' },
    { name: 'Docs', url: '/bitrix24-library/' },
  ],
  screenshots: getImages('bitrix24-library', { 'README.webp': 'Документация' }),
};
