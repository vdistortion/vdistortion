import type { Project } from '../types';
import { getImages } from '../index';

export const module: Project = {
  id: 'transport-infoterminal',
  title: 'Транспортный терминал',
  shortDescription:
    'Информационный терминал для общественного транспорта с отображением маршрутов в реальном времени',
  description: `Интерфейс терминала в рамках "Умный город". Плавная анимация транспорта на картах
(Leaflet/Yandex), синхронизация нескольких API для расчёта ETA и построения маршрутов.
Эволюция от legacy (jQuery, Gulp) к Angular/RxJS.`,
  tech: ['Gulp', 'Webpack', 'Leaflet', 'Stylus', 'Pug', 'jQuery'],
  externalLinks: [{ name: 'GitHub', url: 'https://github.com/vdistortion/smart-stop/tree/master' }],
  screenshots: getImages('transport-infoterminal', {
    'Screenshot_1-min.webp': 'Расписание',
    'Screenshot_2-min.webp': 'Транспорт на карте',
    'Screenshot_3-min.webp': 'Схема проезда',
    'Screenshot_4-min.webp': 'Маршрут',
    '1.webp': 'Инфомат на остановке',
    '2.webp': 'Инфомат на остановке',
    '3.webp': 'Инфомат на остановке',
    '4.webp': 'Инфомат на остановке',
  }),
};
