import type { TypeModule } from '../types';

export const module: TypeModule = {
  code: 'kira-sekira',
  name: 'Сайт фотографа',
  description: 'Портфолио для фотографа на Angular',
  detail: `
Адаптированное портфолио с галереей. Проект мигрирован с Vue на Angular, реализован адаптивный фотогрид и оптимизация
изображений для быстрой загрузки. Для обработки и оптимизации большого количества фотографий был создан и интегрирован
инструмент to-static-images, который автоматически генерирует изображения подходящего размера в нужном формате.
`,
  links: [
    {
      name: 'Сайт',
      url: '/kira-sekira/',
    },
  ],
  tags: ['angular', 'all'],
  tech: ['angular', 'scss', 'typescript'],
  imageNames: {
    'index.webp': 'Главная страница',
    'project.webp': 'Персонажи',
    'animals.webp': 'Животные',
  },
};
