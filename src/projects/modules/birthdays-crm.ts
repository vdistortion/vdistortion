import type { TypeModule } from '../types';

export const module: TypeModule = {
  code: 'birthdays-crm',
  name: 'Дни рождения сотрудников, клиентов и пользователей экстранет',
  description: 'Коммерческое приложение для Битрикс24',
  detail: `
Приложение на <strong>Vue</strong> для напоминаний о днях рождения сотрудников компании, а также пользователей экстранет.
Встраивается в профиль пользователя.
При включении напоминаний они синхронизируются с календарём Битрикса24.
Сначала здесь были и клиенты, но потом их решили убрать в отдельное приложение, чтобы добавить свой функционал.
Есть группировка по своим клиентам.
<br>
Изначально на десктопной версии был вид настоящего календаря: отображался текущий месяц с возможностью перелистывания.
Со временем решили от него отказаться в пользу универсальной мобильной версии.
<br>
`,
  links: [
    {
      name: 'Маркетплейс',
      url: 'https://www.bitrix24.ru/apps/app/sozdavatel.birthday',
    },
    {
      name: 'Лендинг',
      url: 'https://apps.sozdavatel.ru/birthdays/',
    },
    {
      name: 'Маркетплейс CRM',
      url: 'https://www.bitrix24.ru/apps/app/sozdavatel.birthdaycrm',
    },
    {
      name: 'Лендинг CRM',
      url: 'https://apps.sozdavatel.ru/birthdaycrm/',
    },
  ],
  tags: ['vue', 'bitrix24', 'stylus', 'marketplace'],
};
