import arbPro from './modules/arb-pro';
import smartStop from './modules/smart-stop';
import isMobile from './modules/is-mobile';
import ios from './modules/ios';
import usm from './modules/usm';
import birthdays from './modules/birthdays';
import birthdaysClients from './modules/birthdays-clients';
import constructor from './modules/constructor';
import scenaPro from './modules/scenapro';
import vueBitrix24 from './modules/vue-bitrix24';
import toWebpJson from './modules/to-webp-json';
import bitrix24CreateApp from './modules/bitrix24-create-app';
import bitrix24Library from './modules/bitrix24-library';
import bitrix24StickersApp from './modules/bitrix24-stickerpack-app';
import kiraSekira from './modules/kira-sekira';
import creablast from './modules/creablast';
import master from './modules/master';
import impTelegramBot from './modules/imp-telegram-bot';
import directories from './structure.json';

export type TypeTag =
  | 'ajax'
  | 'angular'
  | 'bitrix24'
  | 'bootstrap'
  | 'bot'
  | 'google-maps'
  | 'gulp'
  | 'jquery'
  | 'latex'
  | 'leaflet'
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
  | 'telegram'
  | 'typescript'
  | 'vite'
  | 'vue'
  | 'vuetify'
  | 'webpack'
  | 'yandex-maps'
  | 'интерсвязь';

const t: TypeTag[] = ['ajax', 'vue', 'stylus'];
console.log(t);

type TypeFile = {
  type: string;
  name: string;
};

type TypeFolder = {
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

type TypeImageList = {
  file: string;
  path: string;
};

export type TypeImage = {
  src: string;
  title: string;
};

type TypeModule = {
  code: string;
  name: string;
  tags: TypeTag[];
  description: string;
  detail?: string;
  links?: TypeLink[];
  videos?: TypeVideo[];
  imageNames?: {
    [index: string]: string;
  };
};

export type TypeProject = {
  name: string;
  tags: TypeTag[];
  description: string;
  detail: string;
  links: TypeLink[];
  videos: TypeVideo[];
  images: TypeImage[];
};

export type TypeProjects = {
  [index: string]: TypeProject;
};

function getImages(folderName: string) {
  const folder: TypeFolder = directories.find(
    (dir: TypeFolder) => dir.name === folderName,
  )!;
  return folder.children.map((file: TypeFile) => ({
    file: file.name,
    path: `assets/images/projects/${folderName}/${file.name}`,
  }));
}

function parseProject(
  project: TypeModule,
  imagesList: TypeImageList[] = [],
): Record<string, TypeProject> {
  const {
    code,
    name,
    tags,
    description,
    detail = '',
    links = [],
    imageNames = {},
    videos = [],
  } = project;

  const images = imagesList.map((image) => ({
    title: imageNames[image.file] ?? '',
    src: image.path,
  }));

  const result: TypeProject = {
    name,
    description,
    detail,
    links,
    tags,
    images,
    videos,
  };

  return {
    [code]: result,
  };
}

export const projects: TypeProjects = {
  ...parseProject(vueBitrix24 as TypeModule, getImages('vue-bitrix24')),
  ...parseProject(bitrix24Library as TypeModule, getImages('bitrix24-library')),
  ...parseProject(
    bitrix24CreateApp as TypeModule,
    getImages('bitrix24-create-app'),
  ),
  ...parseProject(
    bitrix24StickersApp as TypeModule,
    getImages('bitrix24-stickerpack-app'),
  ),
  ...parseProject(toWebpJson as TypeModule, getImages('to-webp-json')),
  ...parseProject(master as TypeModule, getImages('master')),
  ...parseProject(kiraSekira as TypeModule, getImages('kira-sekira')),
  ...parseProject(creablast as TypeModule, getImages('creablast')),
  ...parseProject(impTelegramBot as TypeModule, getImages('imp-telegram-bot')),
  ...parseProject(smartStop as TypeModule, getImages('smart-stop')),
  ...parseProject(isMobile as TypeModule, getImages('is-mobile')),
  ...parseProject(ios as TypeModule, getImages('ios')),
  ...parseProject(usm as TypeModule),
  ...parseProject(birthdays as TypeModule, getImages('birthdays')),
  ...parseProject(
    birthdaysClients as TypeModule,
    getImages('birthdays-clients'),
  ),
  ...parseProject(constructor as TypeModule, getImages('constructor')),
  ...parseProject(scenaPro as TypeModule, getImages('scenapro')),
  ...parseProject(arbPro as TypeModule, getImages('arb-pro')),
};
