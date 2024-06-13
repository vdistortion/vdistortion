import type { TypeModule } from '../types';

export const module: TypeModule = {
  code: 'vue-bitrix24',
  name: 'vue-bitrix24',
  description: `Библиотека компонентов в стилистике Bitrix24`,
  detail: `
UI-компоненты этой библиотеки изначально были созданы в <strong>bitrix24-create-app</strong>, чтобы приложения выглядели похожими на окружение Битрикс24.
Сейчас этот пакет переписан на <strong>TypeScript</strong>, также подключен <strong>Storybook</strong> взамен собственного велосипеда для страницы с демонстрацией (см. скриншоты).
Компоненты <em>bx-link</em>, <em>bx-input-date</em> и <em>bx-select</em> переехали обратно в <strong>bitrix24-create-app</strong>.
`,
  repos: [
    {
      name: 'GitHub',
      url: 'vue-bitrix24',
    },
    {
      name: 'npmjs',
      url: 'vue-bitrix24',
    },
  ],
  links: [
    {
      name: 'Storybook',
      url: '/vue-bitrix24/',
    },
  ],
  tags: [
    'github',
    'pet-project',
    'vue',
    'storybook',
    'bitrix24',
    'npm',
    'plugin',
    'typescript',
    'vite',
  ],
  imageNames: {
    'Screenshot 2022-04-12 at 00-21-40 vue-bitrix24.webp': 'bx-button',
    'Screenshot 2022-04-12 at 00-21-55 vue-bitrix24.webp': 'bx-input',
    'Screenshot 2022-04-12 at 00-22-24 vue-bitrix24.webp': 'bx-input-file',
    'Screenshot 2022-04-12 at 00-22-09 vue-bitrix24.webp': 'bx-input-date',
    'Screenshot 2022-04-12 at 00-22-41 vue-bitrix24.webp': 'bx-select',
    'Screenshot 2022-04-12 at 00-22-33 vue-bitrix24.webp': 'bx-entity-selector',
    'Screenshot 2022-04-12 at 00-22-55 vue-bitrix24.webp': 'bx-radio',
    'Screenshot 2022-04-12 at 00-23-07 vue-bitrix24.webp': 'bx-checkbox',
    'Screenshot 2022-04-12 at 00-23-16 vue-bitrix24.webp': 'bx-textarea',
    'Screenshot 2022-04-12 at 00-23-34 vue-bitrix24.webp': 'bx-progressbar',
    'Screenshot 2022-04-12 at 00-23-47 vue-bitrix24.webp': 'bx-alert',
    'Screenshot 2022-04-12 at 00-24-35 vue-bitrix24.webp': 'bx-icon',
  },
};
