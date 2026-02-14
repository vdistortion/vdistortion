import type { TypeModule } from '../types';

export const module: TypeModule = {
  code: 'birthdays',
  name: 'Дни рождения сотрудников и клиентов',
  description: 'Коммерческое приложение для напоминаний и синхронизации с календарём',
  detail: `
Коммерческие приложения на Vue для напоминаний о днях рождения сотрудников и клиентов с синхронизацией с календарём
Bitrix24. Встраиваются в профиль пользователя, поддерживают фильтрацию и группировку по своим клиентам, актуально для корпоративных
порталов и CRM-интеграций (маркетплейс).
<br>
`,
  links: [
    {
      name: 'Маркетплейс',
      url: 'https://www.bitrix24.ru/apps/app/sozdavatel.birthday',
    },
    {
      name: 'Дни рождения сотрудников',
      url: 'https://apps.sozdavatel.ru/birthdays/',
    },
    {
      name: 'Маркетплейс',
      url: 'https://www.bitrix24.ru/apps/app/sozdavatel.birthdaycrm',
    },
    {
      name: 'Дни рождения клиентов',
      url: 'https://apps.sozdavatel.ru/birthdaycrm/',
    },
  ],
  tags: ['all'],
  tech: ['vue', 'bitrix24', 'stylus'],
};
