import type { Project } from '../types';
import { getImages } from '../index';

export const module: Project = {
  id: 'kira-sekira',
  title: 'Сайт фотографа',
  shortDescription: 'Портфолио для фотографа на Angular',
  description: `Адаптивное портфолио с галереей. Мигрировано с Vue на Angular, реализован адаптивный
фотогрид и оптимизация изображений через to-static-images.`,
  tech: ['Angular', 'SCSS', 'TypeScript'],
  externalLinks: [{ name: 'Сайт', url: '/kira-sekira/' }],
  screenshots: getImages('kira-sekira', {
    'index.webp': 'Главная страница',
    'project.webp': 'Персонажи',
    'animals.webp': 'Животные',
  }),
};
