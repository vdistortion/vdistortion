import type { TypeModule } from '../types';

export const module: TypeModule = {
  code: 'birthdays-crm',
  name: 'Дни рождения клиентов',
  description: 'Коммерческое приложение для Битрикс24',
  detail: `
Приложение на <strong>Vue</strong> для напоминаний о днях рождения клиентов.
Изначально было частью приложения, в котором были ещё сотрудники компании и экстранет.
Есть группировка по своим клиентам.
`,
  links: [
    {
      name: 'Маркетплейс',
      url: 'https://www.bitrix24.ru/apps/app/sozdavatel.birthdaycrm',
    },
    {
      name: 'Лендинг',
      url: 'https://apps.sozdavatel.ru/birthdaycrm/',
    },
  ],
  tags: ['vue', 'ajax', 'bitrix24', 'stylus', 'marketplace'],
  imageNames: {
    'ДРклиентов-01.webp': 'Дни рождения клиентов',
    'ДРклиентов-02.webp': 'Дни рождения клиентов на смартфоне',
    'ДРклиентов-03.webp': 'Напоминания в календаре',
    'ДРклиентов-04.webp': 'Клиенты без дней рождения',
    'ДРклиентов-05.webp': 'Напоминание за 1 или 3 дня',
  },
};
