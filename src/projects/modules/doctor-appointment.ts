import type { Project } from '../types';
import { getImages } from '../index';

export const module: Project = {
  id: 'doctor-appointment',
  title: 'Онлайн-запись к врачу',
  shortDescription: 'Модуль записи к врачу для регионального мобильного приложения',
  description: `Мобильный фронтенд для приложения «Интерсвязь. Умный город». Сложная интеграция
с региональными МИС. Проверка страховых полисов, управление профилями пациентов,
фильтрация слотов записи. Разработан на jQuery/Pug.`,
  tech: ['gulp', 'webpack', 'stylus', 'pug', 'jquery'],
  externalLinks: [],
  screenshots: getImages('doctor-appointment'),
};
