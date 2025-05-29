import type { TypeModule } from '../types';

export const module: TypeModule = {
  code: 'creablast',
  name: 'Creablast',
  description: 'Портфолио в розовых тонах',
  detail: `
Изначально сайт сделан на <strong>Vue</strong>, потом переписан на <strong>Angular</strong> и <strong>TypeScript</strong>.
`,
  links: [
    {
      name: 'Сайт',
      url: '/creablast/',
    },
  ],
  tags: ['angular', 'scss', 'typescript'],
  imageNames: {
    '1.webp': 'Main Page',
    '2.webp': 'Work Page',
    '3.webp': 'Project Page',
  },
};
