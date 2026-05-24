import type { Project } from '../types';
import { getImages } from '../index';

export const module: Project = {
  id: 'optical-network-ui',
  title: 'ISP Network Manager',
  shortDescription:
    'Интерфейс для проектирования и управления оптической сетью интернет-провайдера',
  description: `Интерактивный интерфейс для работы с топологией сети: кабели, ящики, узлы,
управление слоями (GPON, КТВ), drag-and-drop редактирование на Google Maps.
Мигрирован с VanillaJS на Vue. Выделен переиспользуемый компонент house-scheme-svg.`,
  tech: ['SVG', 'Vue', 'Google Maps', 'jQuery', 'Stylus'],
  externalLinks: [
    { name: 'GitHub (house-scheme-svg)', url: 'https://github.com/vdistortion/house-scheme-svg' },
    { name: 'Структурная схема дома', url: '/house-scheme-svg/' },
  ],
  screenshots: getImages('optical-network-ui'),
};
