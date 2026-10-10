import type { Project } from '../types';
import { getImages } from '../index';

export const module: Project = {
  id: 'birthdays',
  title: 'Дни рождения сотрудников и клиентов',
  shortDescription: 'Коммерческое приложение для напоминаний и синхронизации с календарём',
  description: `Коммерческие приложения на Vue для напоминаний о днях рождения с синхронизацией
с календарём Bitrix24. Фильтрация и группировка по клиентам. Опубликованы в маркетплейсе.`,
  tech: ['Vue', 'Bitrix24', 'Stylus'],
  externalLinks: [
    {
      name: 'Маркетплейс (сотрудники)',
      url: 'https://www.bitrix24.ru/apps/app/sozdavatel.birthday',
    },
    {
      name: 'Маркетплейс (клиенты)',
      url: 'https://www.bitrix24.ru/apps/app/sozdavatel.birthdaycrm',
    },
  ],
  screenshots: getImages('birthdays'),
};
