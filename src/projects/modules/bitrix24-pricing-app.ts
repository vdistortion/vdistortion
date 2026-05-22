import type { Project } from '../types';

export const module: Project = {
  id: 'bitrix24-pricing-app',
  title: 'Project Estimator',
  shortDescription: 'Приложение для расчета стоимости коммерческих предложений',
  description: `Модуль для расчёта стоимости проектов в Bitrix24. Формирование смет,
применение коэффициентов, экспорт в CRM.
Мигрирован с legacy (PHP/JS) на Vue+TypeScript.`,
  tags: ['all'],
  tech: ['bitrix24', 'vue', 'vite', 'scss', 'typescript'],
  externalLinks: [{ name: 'GitHub', url: 'https://github.com/vdistortion/bitrix24-pricing-app' }],
};
