import type { TypeModule } from '../types';

export const module: TypeModule = {
  code: 'bitrix24-library',
  name: 'bitrix24-library',
  description: 'Promise-обёртка для работы с JavaScript REST API Bitrix24',
  detail: `
Изначально была частью <strong>bitrix24-create-app</strong>.
Содержит обёртку на промисах для стандартной библиотеки BX24.
Плюсом добавлено несколько методов, например нормальные пакетные запросы.
Переписана на <strong>TypeScript</strong>.
`,
  repos: [
    {
      name: 'GitHub',
      url: 'bitrix24-library',
    },
    {
      name: 'npmjs',
      url: 'bitrix24-library',
    },
  ],
  links: [
    {
      name: 'Docs',
      url: '/bitrix24-library/',
    },
  ],
  tags: ['github', 'bitrix24', 'open-source', 'npm', 'vite', 'vitepress'],
  imageNames: {
    'README.webp': 'Документация',
  },
};
