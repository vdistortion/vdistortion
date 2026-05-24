import type { Project } from '../types';
import { getImages } from '../';

export const module: Project = {
  id: 'ui-bitrix24',
  title: 'UI Kit',
  shortDescription:
    'Библиотека компонентов для создания интерфейсов в стилистике Bitrix24 для Vue и React',
  description: `Коллекция переиспользуемых UI-компонентов для Vue и React (кнопки, формы и др.), бесшовно
интегрирующихся в интерфейс Bitrix24. Полностью переписана на TypeScript. Storybook служит
демонстрацией и документацией для команды и внешних интеграторов.`,
  tech: ['Vue', 'Storybook', 'Bitrix24', 'npm', 'TypeScript', 'Vite', 'VitePress'],
  externalLinks: [
    { name: 'GitHub', url: 'https://github.com/vdistortion/ui-bitrix24' },
    { name: 'npmjs (Vue)', url: 'https://www.npmjs.com/package/vue-bitrix24' },
    { name: 'npmjs (React)', url: 'https://www.npmjs.com/package/react-bitrix24' },
    { name: 'Docs', url: '/ui-bitrix24/' },
    { name: 'Storybook Vue', url: '/ui-bitrix24/vue/' },
    { name: 'Storybook React', url: '/ui-bitrix24/react/' },
  ],
  screenshots: getImages('ui-bitrix24', {
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
  }),
};
