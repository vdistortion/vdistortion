import type { TypeModule } from '../types';

export const module: TypeModule = {
  code: 'bitrix24-stickerpack-app',
  name: 'bitrix24-stickerpack-app',
  description: 'Стикеры для порталов Битрикс24',
  detail: `
Стикеры для порталов Битрикс24.
Приложение встраивается в мессенджер.
Можно выключать встроенные стикеры, а также добавлять и удалять свои.
Приложение сохраняет своё состояние в localStorage.
Ctrl+Shift+T переключает страницы.
Приложение поддерживает новые чаты.
<br>
Сделано на <strong>Vue</strong>-версии <strong>bitrix24-create-app</strong>, сейчас переписано на <strong>Angular</strong>.
`,
  links: [
    {
      name: 'GitHub',
      url: 'bitrix24-stickerpack-app',
    },
    {
      name: 'Демо',
      url: '/bitrix24-stickerpack-app/',
    },
    {
      name: 'Маркетплейс',
      url: 'https://www.bitrix24.ru/apps/app/sozdavatel.stickers/',
    },
    {
      name: 'Лендинг',
      url: 'https://apps.sozdavatel.ru/stickers/',
    },
  ],
  tags: [
    'github',
    'angular',
    'typescript',
    'scss',
    'pet-project',
    'vue',
    'stylus',
    'bitrix24',
    'marketplace',
    'vite',
  ],
};
