import type { TypeModule } from '../types';

export const module: TypeModule = {
  code: 'to-webp-json',
  name: 'to-webp-json',
  description: 'Обработчик изображений для статики',
  detail:
    'Конвертирует изображения в .webp<br>Можно сгенерировать структуру в файл .json<br>Можно указать максимальный размер изображений<br>На этом сайте тоже используется для сжатия изображений',
  links: [
    {
      name: 'GitHub',
      url: 'to-webp-json',
    },
    {
      name: 'npmjs',
      url: 'to-webp-json',
    },
  ],
  tags: ['github', 'typescript', 'nodejs', 'npm', 'pet-project'],
  imageNames: {
    'to-webp-json.webp': 'Документация',
  },
};
