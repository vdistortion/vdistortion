import type { TypeModule } from '../types';

export const module: TypeModule = {
  code: 'smart-stop',
  name: 'Умная остановка',
  description: 'Расписание общественного транспорта на остановках',
  detail: `
Проект в рамках концепции "Умный город".
На главном экране видно, через сколько минут подойдёт транспорт.
Можно строить машруты от остановки до точки Б с показом возможных вариантов проезда.
Также отображается анимированный транспорт на карте, с задержкой в несколько секунд для плавности анимации.
Можно посмотреть полный маршрут троллейбуса или автобуса.
`,
  links: [
    {
      name: 'Описание проекта',
      url: 'https://russiasmartcity.ru/solutions/76',
    },
  ],
  tags: [
    'ajax',
    'gulp',
    'webpack',
    'maps',
    'yandex-maps',
    'leaflet',
    'stylus',
    'pug',
    'smartgrid',
    'jquery',
    'markup',
    'интерсвязь',
  ],
  imageNames: {
    'Screenshot_1-min.webp': 'Расписание',
    'Screenshot_2-min.webp': 'Транспорт на карте',
    'Screenshot_3-min.webp': 'Схема проезда',
    'Screenshot_4-min.webp': 'Маршрут',
  },
};
