import type { Project } from '../types';
import { getImages } from '../index';

export const module: Project = {
  id: 'to-static-images',
  title: 'Static Image Optimizer',
  shortDescription: 'Инструмент оптимизации изображений для статических сайтов на Node.js',
  description: `CLI-утилита рекурсивно обходит папки, конвертирует изображения в WebP/AVIF/PNG/JPG
с настраиваемым сжатием и ресайзом. Генерирует JSON-манифест с метаданными.
Используется в 3+ production-проектах. На её основе опубликованы типы в DefinitelyTyped.`,
  tech: ['typescript', 'nodejs', 'npm', 'vitepress'],
  externalLinks: [
    { name: 'GitHub', url: 'https://github.com/vdistortion/to-static-images' },
    { name: 'npmjs', url: 'https://www.npmjs.com/package/to-static-images' },
    {
      name: 'npmjs (@types)',
      url: 'https://www.npmjs.com/package/@types/directory-structure-json',
    },
    { name: 'Docs', url: '/to-static-images/' },
  ],
  screenshots: getImages('to-static-images', { 'README.webp': 'Документация' }),
};
