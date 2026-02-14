export enum ProjectTag {
  all = 'Все проекты',
  angular = 'Angular',
}

export type TypeTech =
  | 'angular'
  | 'bitrix24'
  | 'google-maps'
  | 'gulp'
  | 'jquery'
  | 'leaflet'
  | 'nodejs'
  | 'npm'
  | 'pug'
  | 'scss'
  | 'storybook'
  | 'stylus'
  | 'svg'
  | 'telegram'
  | 'typescript'
  | 'vite'
  | 'vitepress'
  | 'vue'
  | 'vuetify'
  | 'webpack';

export type TypeAllTag = keyof typeof ProjectTag;

export type TypeFile = {
  type: string;
  name: string;
};

export type TypeFolder = {
  type: string;
  name: string;
  children: TypeFile[];
};

export type TypeLink = {
  url: string;
  name: string;
};

export type TypeImageList = {
  file: string;
  path: string;
};

export type TypeImage = {
  src: string;
  title: string;
};

export type TypeModule = {
  code: string;
  name: string;
  tags: TypeAllTag[];
  tech: TypeTech[];
  description: string;
  detail?: string;
  repos?: TypeLink[];
  links?: TypeLink[];
  imageNames?: Record<string, string>;
};

export type TypeProject = {
  name: string;
  tags: TypeAllTag[];
  tech: TypeTech[];
  description: string;
  detail: string;
  repos: TypeLink[];
  links: TypeLink[];
  images: TypeImage[];
};

export type TypeProjects = Record<string, TypeProject>;
