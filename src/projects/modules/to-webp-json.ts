import type { TypeModule } from '../types';

export const module: TypeModule = {
  code: 'to-webp-json',
  name: 'to-webp-json',
  description: 'Обработчик изображений для статики',
  detail: `
Библиотека сделана для удобного отображения большого количества изображений на статичных сайтах, таких как портфолио.
<br>
Конвертирует изображения в .webp. Можно сгенерировать структуру в файл .json. Можно указать максимальный размер изображений.
<br>
На этом сайте библиотека также используется.
`,
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
