import type { TypeModule } from '../types';

export const module: TypeModule = {
  code: 'ui-bitrix24',
  name: 'UI Kit',
  description: `Библиотека компонентов для создания интерфейсов в стилистике Bitrix24 для Vue и React`,
  detail: `
Коллекция переиспользуемых UI-компонентов для Vue и React (кнопки, формы и др.), бесшовно интегрирующихся в интерфейс
Bitrix24 и обеспечивающих визуальную консистентность приложений. Полностью переписана на TypeScript для повышения
надежности. Предназначена для быстрого создания интерфейсов, похожих на Bitrix24, с готовыми темами и контролами.
Компоненты спроектированы так, чтобы их можно было интегрировать вместе с bitrix24-library для полнофункциональных
приложений. Storybook служит демонстрацией и документацией для команды и внешних интеграторов. Позволяет разработчикам
собирать интерфейсы, идентичные нативному окружению, в несколько раз быстрее. Присутствует документация.
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
    {
      name: 'npmjs',
      url: 'react-bitrix24',
    },
  ],
  links: [
    {
      name: 'Docs',
      url: '/ui-bitrix24/',
    },
    {
      name: 'Storybook Vue',
      url: '/ui-bitrix24/vue/',
    },
    {
      name: 'Storybook React',
      url: '/ui-bitrix24/react/',
    },
  ],
  tags: ['all'],
  tech: ['vue', 'storybook', 'bitrix24', 'npm', 'typescript', 'vite', 'vitepress'],
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
