import type { Project } from '../types';
import { getImages } from '../index';

export const module: Project = {
  id: 'master-crm',
  title: 'Мастер отчётов',
  shortDescription: 'Коммерческое приложение для формирования аналитических отчётов по данным CRM',
  description: `Визуализация данных продаж по CRM-сущностям Bitrix24. Кастомные выборки,
группировка, фильтрация и сводные таблицы. Экспорт в ленту событий компании.
Vue/Vuetify, целевое использование — enterprise-аналитика.`,
  tech: ['Vue', 'Bitrix24', 'Vuetify', 'Stylus'],
  externalLinks: [
    {
      name: 'Маркетплейс',
      url: 'https://www.bitrix24.ru/apps/app/sozdavatel.konstruktor_otchetov_bitriks24/',
    },
    { name: 'Лендинг', url: 'https://apps.sozdavatel.ru/konstruktor_otchetov/' },
  ],
  screenshots: getImages('master-crm'),
};
