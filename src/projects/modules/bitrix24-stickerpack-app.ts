import type { TypeModule } from '../types';

export const module: TypeModule = {
  code: 'bitrix24-stickerpack-app',
  name: 'bitrix24-stickerpack-app',
  description: 'Стикеры для порталов Битрикс24',
  detail: `
Стикеры для порталов Битрикс24.
Приложение встраивается в мессенджер.
Можно выключать встроенные стикеры, а также добавлять и удалять свои.
Последние 19 стикеров сохраняются.
Приложение сохраняет своё состояние в localStorage.
Данные реактивны (RxJS) и синхронизируются между вкладками браузера.
Ctrl+Shift+T переключает страницы с наборами.
Приложение поддерживает новые чаты.
<br>
Изначально это был бот, который при встраивании в чат не имел доступа к API, но с обновлением чата Битриксом ситуация улучшилась.
Сделано на <strong>Vue</strong>-версии <strong>bitrix24-create-app</strong>, сейчас переписано на <strong>Angular</strong>.
`,
  repos: [
    {
      name: 'GitHub',
      url: 'bitrix24-stickerpack-app',
    },
  ],
  links: [
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
    'bitrix24',
    'marketplace',
    'vite',
  ],
};
