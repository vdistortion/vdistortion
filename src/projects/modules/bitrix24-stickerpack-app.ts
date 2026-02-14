import type { TypeModule } from '../types';

export const module: TypeModule = {
  code: 'bitrix24-stickerpack-app',
  name: 'Stickerpack Manager',
  description:
    'Интерактивное приложение для управления стикерами внутри корпоративного мессенджера для маркетплейса Bitrix24',
  detail: `
Сложное клиентское приложение, встраиваемое в интерфейс чатов. Реализована синхронизация состояния между вкладками
браузера в реальном времени. Позволяет пользователям использовать встроенные стикеры, загружать собственные и управлять
их видимостью. Можно переключать страницы с наборами. Поддерживает горячие клавиши, сохранение настроек и последних стикеров.
Изначально написано на Vue, полностью переписано на Angular для улучшения производительности и типизации.
Практическое применение — маркетплейс Bitrix24 и встроенные приложения.
Разработка разветвилась: Angular-версия на GitHub, коммерческая (Vue) на marketplace. Версия с GPL на GitHub; коммерческая – в маркетплейсе Bitrix24.
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
  tags: ['angular', 'all'],
  tech: ['angular', 'typescript', 'scss', 'bitrix24'],
};
