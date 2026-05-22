import type { Project } from '../types';
import { getImages } from '../index';

export const module: Project = {
  id: 'creablast',
  title: 'Сайт креатора',
  shortDescription: 'Лендинг для копирайтера и автора на Angular',
  description: `Проект изначально сделан на Vue, потом переписан на Angular и TypeScript
для улучшения производительности и контроля.`,
  tags: ['angular', 'all'],
  tech: ['angular', 'scss', 'typescript'],
  externalLinks: [{ name: 'Сайт', url: '/creablast/' }],
  screenshots: getImages('creablast', {
    '1.webp': 'Main Page',
    '2.webp': 'Work Page',
    '3.webp': 'Project Page',
  }),
};
