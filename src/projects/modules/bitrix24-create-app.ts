import type { TypeModule } from '../types';

export const module: TypeModule = {
  code: 'bitrix24-create-app',
  name: 'CLI',
  description: 'Удобный инструмент для автоматизации развертывания Angular/Vue приложений',
  detail: `
Инструмент командной строки, автоматизирующий создание и настройку приложений первого и второго типа для Bitrix24.
Решает проблему сложной настройки окружения, предоставляя готовые, оптимизированные шаблоны на Angular и Vue с
предустановленными TypeScript, Vite, а также интеграцией с bitrix24-library (Promise API) и ui-bitrix24 (компоненты).
Позволяет вести локальную разработку с hot-reload и автоматически генерирует архив для загрузки в маркетплейс Bitrix24,
экономя часы ручной конфигурации. Используется как отправная точка при разработке коммерческих приложений для портала.
`,
  repos: [
    {
      name: 'GitHub',
      url: 'bitrix24-create-app',
    },
    {
      name: 'npmjs',
      url: 'bitrix24-create-app',
    },
  ],
  links: [
    {
      name: 'Docs',
      url: '/bitrix24-create-app/',
    },
  ],
  tags: ['angular', 'all'],
  tech: ['angular', 'typescript', 'scss', 'vue', 'bitrix24', 'npm', 'vitepress'],
  imageNames: {
    'README.webp': 'Документация',
  },
};
