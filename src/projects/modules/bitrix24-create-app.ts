import type { Project } from '../types';
import { getImages } from '../index';

export const module: Project = {
  id: 'bitrix24-create-app',
  title: 'CLI',
  shortDescription: 'Удобный инструмент для автоматизации развертывания Angular/Vue приложений',
  description: `CLI-инструмент, автоматизирующий создание приложений для Bitrix24. Предоставляет готовые
шаблоны на Angular и Vue с TypeScript, Vite, интеграцией с bitrix24-library и ui-bitrix24.
Поддерживает hot-reload и автоматически генерирует архив для маркетплейса.`,
  tech: ['angular', 'typescript', 'scss', 'vue', 'bitrix24', 'npm', 'vitepress'],
  externalLinks: [
    { name: 'GitHub', url: 'https://github.com/vdistortion/bitrix24-create-app' },
    { name: 'npmjs', url: 'https://www.npmjs.com/package/bitrix24-create-app' },
    { name: 'Docs', url: '/bitrix24-create-app/' },
  ],
  screenshots: getImages('bitrix24-create-app', { 'README.webp': 'Документация' }),
};
