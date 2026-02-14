import type { TypeModule } from '../types';

export const module: TypeModule = {
  code: 'bitrix24-pricing-app',
  name: 'Project Estimator',
  description: 'Приложение для расчета стоимости коммерческих предложений',
  detail: `
Модуль для расчёта стоимости проектов в Bitrix24. Внутренний корпоративный продукт для автоматизации отдела продаж. Позволяет формировать сложные сметы,
применять коэффициенты и экспортировать их в CRM. Мигрирован с legacy-стека (PHP/JS) на Vue+TypeScript, что значительно ускорило работу с приложением.
`,
  repos: [
    {
      name: 'GitHub',
      url: 'bitrix24-pricing-app',
    },
  ],
  tags: ['all'],
  tech: ['bitrix24', 'vue', 'vite', 'scss', 'typescript'],
};
