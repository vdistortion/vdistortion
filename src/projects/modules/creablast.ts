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
  tags: [
    'pet-project',
    'angular',
    'scss',
    'smartgrid',
    'markup',
    'typescript',
    'vite',
  ],
  imageNames: {
    '1.png': 'Main Page',
    '2.png': 'Work Page',
    '3.png': 'Project Page',
  },
};
