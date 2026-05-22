import type { Project } from '../types';
import { getImages } from '../index';

export const module: Project = {
  id: 'bitrix24-stickerpack-app',
  title: 'Stickerpack Manager',
  shortDescription:
    'Интерактивное приложение для управления стикерами в корпоративном мессенджере Bitrix24',
  description: `Сложное приложение, встраиваемое в интерфейс чатов. Синхронизация состояния между вкладками
в реальном времени. Поддерживает горячие клавиши, кастомные стикеры и сохранение настроек.
Изначально Vue, полностью переписано на Angular. Angular-версия на GitHub, коммерческая (Vue) — в маркетплейсе.`,
  tags: ['angular', 'all'],
  tech: ['angular', 'typescript', 'scss', 'bitrix24'],
  externalLinks: [
    { name: 'GitHub', url: 'https://github.com/vdistortion/bitrix24-stickerpack-app' },
    { name: 'Демо', url: '/bitrix24-stickerpack-app/' },
    { name: 'Маркетплейс', url: 'https://www.bitrix24.ru/apps/app/sozdavatel.stickers/' },
    { name: 'Лендинг', url: 'https://apps.sozdavatel.ru/stickers/' },
  ],
  screenshots: getImages('bitrix24-stickerpack-app'),
};
