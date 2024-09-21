import type { TypeModule } from '../types';

export const module: TypeModule = {
  code: 'scenapro',
  name: 'ПРО-Сцена',
  description:
    'Доработка сайта для поставщика сценических конструкций и оборудования',
  detail: `
Фронтенд для сайта, а также страница с проектами на Vue.
`,
  links: [
    {
      name: 'Сайт',
      url: 'https://scenapro.ru',
    },
    {
      name: 'Страница "Наши проекты"',
      url: 'https://scenapro.ru/o-kompanii/nashi-proekty/',
    },
  ],
  tags: ['ajax', 'vue', 'maps', 'swiper', 'responsive', 'stylus', 'markup'],
  imageNames: {
    'Screenshot at Aug 23 12-47-08.webp': 'Сцены на карте и фильтр',
    'Screenshot at Aug 23 12-47-56.webp': 'Детальная страница со слайдером',
    'Screenshot at Aug 23 12-48-18.webp': 'Список сцен',
    'Screenshot at Aug 23 12-49-11.webp': 'Заказ звонка',
    'Screenshot at Aug 23 12-49-40.webp': 'Балун сцены на карте',
  },
};
