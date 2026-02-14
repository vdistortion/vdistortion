import type { TypeModule } from '../types';

export const module: TypeModule = {
  code: 'master-crm',
  name: 'Мастер отчётов',
  description: 'Коммерческое приложение для формирования аналитических отчётов по данным CRM',
  detail: `
Коммерческое решение для визуализации данных продаж по CRM-сущностям Bitrix24 (сделкам, лидам, счетам, компаниям и контактам).
Пользователь может создавать кастомные выборки, гибко группировать и фильтровать данные
по полям и строить сводные таблицы. Реализован экспорт результатов в ленту событий компании.
Сделано на Vue/Vuetify, целевое использование — enterprise-аналитика и формирование отчётов для управленческих задач.
`,
  links: [
    {
      name: 'Маркетплейс',
      url: 'https://www.bitrix24.ru/apps/app/sozdavatel.konstruktor_otchetov_bitriks24/',
    },
    {
      name: 'Лендинг',
      url: 'https://apps.sozdavatel.ru/konstruktor_otchetov/',
    },
  ],
  tags: ['all'],
  tech: ['vue', 'bitrix24', 'vuetify', 'stylus'],
};
