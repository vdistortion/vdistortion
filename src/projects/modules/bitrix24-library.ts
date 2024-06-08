import type { TypeModule } from '../types';

export const module: TypeModule = {
  code: 'bitrix24-library',
  name: 'bitrix24-library',
  description: 'Promise-обёртка для работы с JavaScript REST API Bitrix24',
  detail: `
Изначально была частью <strong>bitrix24-create-app</strong>.
Содержит обёртку на промисах для стандартной библиотеки BX24, а также нормальные пакетные запросы.
Плюсом добавлено несколько методов, которых очень не хватает в оригинальной библиотеке.
`,
  links: [
    {
      name: 'GitHub',
      url: 'bitrix24-library',
    },
    {
      name: 'npmjs',
      url: 'bitrix24-library',
    },
  ],
  tags: ['github', 'pet-project', 'bitrix24', 'npm', 'vite', 'plugin'],
  imageNames: {
    'bitrix24-library.webp': 'Документация',
  },
};
