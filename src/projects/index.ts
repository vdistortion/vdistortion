import arb from './modules/arb-pro';
import smartStop from './modules/smart-stop';
import med from './modules/is-med';
import ios from './modules/ios';
import usm from './modules/usm';
import birthdays from './modules/birthdays';
import birthdaysCRM from './modules/birthdays-clients';
import constructor from './modules/constructor';
import scenapro from './modules/scenapro';
import nordw from './modules/nordw';
import vueb24 from './modules/vue-bitrix24';
import create from './modules/bitrix24-create-app';
import library from './modules/bitrix24-library';
import stickers from './modules/bitrix24-stickerpack-app';
import kira from './modules/kira-sekira';
import creablast from './modules/creablast';
import master from './modules/master';
import bot from './modules/imp-telegram-bot';
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
  ...parseProject(vueb24, getImages('vue-bitrix24')),
  ...parseProject(library, getImages('bitrix24-library')),
  ...parseProject(create, getImages('bitrix24-create-app')),
  ...parseProject(stickers, getImages('bitrix24-stickerpack-app')),
  ...parseProject(master, getImages('master')),
  ...parseProject(kira, getImages('kira-sekira')),
  ...parseProject(creablast, getImages('creablast')),
  ...parseProject(bot, getImages('imp-telegram-bot')),
  ...parseProject(smartStop, getImages('smart-stop')),
  ...parseProject(med, getImages('is-med')),
  ...parseProject(ios, getImages('ios')),
  ...parseProject(usm),
  ...parseProject(birthdays, getImages('birthdays')),
  ...parseProject(birthdaysCRM, getImages('birthdays-clients')),
  ...parseProject(constructor, getImages('constructor')),
  ...parseProject(scenapro, getImages('scenapro')),
  ...parseProject(nordw, getImages('nordw')),
  ...parseProject(arb, getImages('arb-pro')),
};
