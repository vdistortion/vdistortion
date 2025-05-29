import type { TypeModule } from '../types';

export const module: TypeModule = {
  code: 'vue-bitrix24',
  name: 'vue-bitrix24',
  description: `Библиотека компонентов в стилистике Bitrix24`,
  detail: `
UI-компоненты этой библиотеки изначально были созданы в <strong>bitrix24-create-app</strong>, чтобы приложения выглядели похожими на окружение Битрикс24.
Сейчас этот пакет переписан на <strong>TypeScript</strong>, также подключен <strong>Storybook</strong>.
`,
  repos: [
    {
      name: 'GitHub',
      url: 'ui-bitrix24',
    },
    {
      name: 'npmjs',
      url: 'vue-bitrix24',
    },
  ],
  links: [
    {
      name: 'Docs',
      url: '/ui-bitrix24/',
    },
    {
      name: 'Storybook',
      url: '/ui-bitrix24/vue/',
    },
  ],
  tags: [
    'github',
    'vue',
    'storybook',
    'bitrix24',
    'npm',
    'open-source',
    'typescript',
    'vite',
    'vitepress',
  ],
  imageNames: {
    'bx-button.webp': 'bx-button',
    'bx-input.webp': 'bx-input',
    'bx-input-file.webp': 'bx-input-file',
    'bx-entity-selector.webp': 'bx-entity-selector',
    'bx-radio.webp': 'bx-radio',
    'bx-checkbox.webp': 'bx-checkbox',
    'bx-textarea.webp': 'bx-textarea',
    'bx-progressbar.webp': 'bx-progressbar',
    'bx-alert.webp': 'bx-alert',
    'bx-icon.webp': 'bx-icon',
  },
};
