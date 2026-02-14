import type { TypeModule } from '../types';

export const module: TypeModule = {
  code: 'creablast',
  name: 'Сайт креатора',
  description: 'Лендинг для копирайтера и автора на Angular',
  detail: `
Проект изначально сделан на Vue, потом переписан на Angular и TypeScript для улучшения производительности и контроля.
`,
  links: [
    {
      name: 'Сайт',
      url: '/creablast/',
    },
  ],
  tags: ['angular', 'all'],
  tech: ['angular', 'scss', 'typescript'],
  imageNames: {
    '1.webp': 'Main Page',
    '2.webp': 'Work Page',
    '3.webp': 'Project Page',
  },
};
