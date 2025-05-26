import type { TypeModule } from '../types';

export const module: TypeModule = {
  code: 'kira-sekira',
  name: 'Kira Sekira',
  description: 'Портфолио для фотографа',
  detail: `
Изначально сайт сделан на <strong>Vue</strong>, потом переписан на <strong>Angular</strong> и <strong>TypeScript</strong>.
Специально для сайта создан пакет <strong>to-webp-json</strong> для удобной работы с большим количеством изображений.
`,
  links: [
    {
      name: 'Сайт',
      url: '/kira-sekira/',
    },
  ],
  tags: ['pet-project', 'angular', 'scss', 'markup', 'typescript', 'vite'],
  imageNames: {
    'index.webp': 'Главная страница',
    'project.webp': 'Персонажи',
    'animals.webp': 'Животные',
  },
};
