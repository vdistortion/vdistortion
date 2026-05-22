import { environment } from '../environments/environment';

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

export type TypeAllTag = keyof typeof environment.ProjectTags;

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
  tags: TypeAllTag[];
  tech: TypeTech[];
  externalLinks: ProjectLink[];
  screenshots?: ProjectImage[];
}

export type Projects = Record<string, Project>;
