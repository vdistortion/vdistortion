import type { TypeModule } from '../types';

export const module: TypeModule = {
  code: 'to-static-images',
  name: 'Static Image Optimizer',
  description: 'Инструмент оптимизации изображений для статических сайтов на Node.js',
  detail: `
CLI-утилита решает проблему ручной обработки большого количества изображений для статических сайтов. Она рекурсивно
обходит папки, конвертирует изображения в современные форматы (WebP, AVIF, PNG, JPG) с настраиваемым сжатием и ресайзом.
Поддерживает интерактивный режим и управление параллельной обработкой. Результатом является оптимизированный набор
ассетов и JSON-манифест с метаданными для удобной интеграции. Используется в 3+ production-проектах. На основе
потребностей этого пакета были разработаны и опубликованы типы для directory-structure-json в репозиторий DefinitelyTyped.
`,
  repos: [
    {
      name: 'GitHub',
      url: 'to-static-images',
    },
    {
      name: 'npmjs',
      url: 'to-static-images',
    },
    {
      name: 'npmjs',
      url: '@types/directory-structure-json',
    },
  ],
  links: [
    {
      name: 'Docs',
      url: '/to-static-images/',
    },
  ],
  tags: ['all'],
  tech: ['typescript', 'nodejs', 'npm', 'vitepress'],
  imageNames: {
    'README.webp': 'Документация',
  },
};
