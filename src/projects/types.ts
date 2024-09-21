export type TypeTag =
  | 'ajax'
  | 'angular'
  | 'bitrix24'
  | 'github'
  | 'gulp'
  | 'jquery'
  | 'legacy'
  | 'maps'
  | 'marketplace'
  | 'markup'
  | 'nodejs'
  | 'npm'
  | 'pet-project'
  | 'plugin'
  | 'pug'
  | 'responsive'
  | 'scss'
  | 'smartgrid'
  | 'storybook'
  | 'stylus'
  | 'svg'
  | 'swiper'
  | 'typescript'
  | 'vite'
  | 'vue'
  | 'react'
  | 'vuetify'
  | 'webpack'
  | 'интерсвязь';

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

export type TypeVideo = {
  src: string;
  title?: string;
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
  tags: TypeTag[];
  description: string;
  detail?: string;
  repos?: TypeLink[];
  links?: TypeLink[];
  videos?: TypeVideo[];
  imageNames?: Record<string, string>;
};

export type TypeProject = {
  name: string;
  tags: TypeTag[];
  description: string;
  detail: string;
  repos: TypeLink[];
  links: TypeLink[];
  videos: TypeVideo[];
  images: TypeImage[];
};

export type TypeProjects = Record<string, TypeProject>;
