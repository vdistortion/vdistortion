import type { TypeModule } from '../types';

export const module: TypeModule = {
  code: 'react-bitrix24',
  name: 'react-bitrix24',
  description: `Библиотека компонентов в стилистике Bitrix24`,
  detail: `
UI-компоненты как во <strong>vue-bitrix24</strong>, только для <strong>React</strong>.
`,
  repos: [
    {
      name: 'GitHub',
      url: 'ui-bitrix24',
    },
    {
      name: 'npmjs',
      url: 'react-bitrix24',
    },
  ],
  links: [
    {
      name: 'Storybook',
      url: '/ui-bitrix24/react/',
    },
  ],
  tags: [
    'github',
    'pet-project',
    'react',
    'storybook',
    'bitrix24',
    'npm',
    'plugin',
    'typescript',
    'vite',
  ],
  imageNames: {
    'README.webp': 'Документация',
  },
};
