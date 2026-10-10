export type TypeTech =
  | 'Angular'
  | 'Bitrix24'
  | 'Google Maps'
  | 'Gulp'
  | 'jQuery'
  | 'Leaflet'
  | 'Node.js'
  | 'npm'
  | 'Pug'
  | 'SCSS'
  | 'Storybook'
  | 'Stylus'
  | 'SVG'
  | 'Telegram'
  | 'TypeScript'
  | 'Vite'
  | 'VitePress'
  | 'Vue'
  | 'Vuetify'
  | 'Webpack';

export type TypeFile = {
  type: string;
  name: string;
  width: number;
  height: number;
};

export type TypeFolder = {
  type: string;
  name: string;
  children: TypeFile[];
};

export interface ProjectLink {
  name: string;
  url: string;
}

export interface ProjectImage {
  src: string;
  title: string;
  width: number;
  height: number;
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  tech: TypeTech[];
  externalLinks: ProjectLink[];
  screenshots?: ProjectImage[];
}

export type Projects = Record<string, Project>;
