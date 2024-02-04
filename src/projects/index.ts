import arbPro from './modules/arb-pro';
import smartStop from './modules/smart-stop';
import isMobile from './modules/is-mobile';
import ios from './modules/ios';
import usm from './modules/usm';
import birthdays from './modules/birthdays';
import birthdaysClients from './modules/birthdays-clients';
import constructor from './modules/constructor';
import scenaPro from './modules/scenapro';
import nordw from './modules/nordw';
import vueBitrix24 from './modules/vue-bitrix24';
import bitrix24CreateApp from './modules/bitrix24-create-app';
import bitrix24Library from './modules/bitrix24-library';
import bitrix24StickersApp from './modules/bitrix24-stickerpack-app';
import kiraSekira from './modules/kira-sekira';
import creablast from './modules/creablast';
import master from './modules/master';
import impTelegramBot from './modules/imp-telegram-bot';
import directories from './structure.json';

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
  tags: string[];
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
  tags: string[];
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

function parseProject(project: TypeModule, imagesList: TypeImageList[] = []) {
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
  ...parseProject(vueBitrix24, getImages('vue-bitrix24')),
  ...parseProject(bitrix24Library, getImages('bitrix24-library')),
  ...parseProject(bitrix24CreateApp, getImages('bitrix24-create-app')),
  ...parseProject(bitrix24StickersApp, getImages('bitrix24-stickerpack-app')),
  ...parseProject(master, getImages('master')),
  ...parseProject(kiraSekira, getImages('kira-sekira')),
  ...parseProject(creablast, getImages('creablast')),
  ...parseProject(impTelegramBot, getImages('imp-telegram-bot')),
  ...parseProject(smartStop, getImages('smart-stop')),
  ...parseProject(isMobile, getImages('is-mobile')),
  ...parseProject(ios, getImages('ios')),
  ...parseProject(usm),
  ...parseProject(birthdays, getImages('birthdays')),
  ...parseProject(birthdaysClients, getImages('birthdays-clients')),
  ...parseProject(constructor, getImages('constructor')),
  ...parseProject(scenaPro, getImages('scenapro')),
  ...parseProject(nordw, getImages('nordw')),
  ...parseProject(arbPro, getImages('arb-pro')),
};
