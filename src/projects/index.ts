import { module as arbPro } from './modules/arb-pro';
import { module as smartStop } from './modules/smart-stop';
import { module as isMobile } from './modules/is-mobile';
import { module as ios } from './modules/ios';
import { module as usm } from './modules/usm';
import { module as birthdaysCrm } from './modules/birthdays-crm';
import { module as masterCrm } from './modules/master-crm';
import { module as scenaPro } from './modules/scenapro';
import { module as vueBitrix24 } from './modules/vue-bitrix24';
import { module as reactBitrix24 } from './modules/react-bitrix24';
import { module as toWebpJson } from './modules/to-webp-json';
import { module as bitrix24CreateApp } from './modules/bitrix24-create-app';
import { module as bitrix24Library } from './modules/bitrix24-library';
import { module as bitrix24StickersApp } from './modules/bitrix24-stickerpack-app';
import { module as kiraSekira } from './modules/kira-sekira';
import { module as creablast } from './modules/creablast';
import { module as master } from './modules/master';
import { module as impTelegramBot } from './modules/imp-telegram-bot';
import directories from './structure.json';
import type {
  TypeTag,
  TypeFile,
  TypeLink,
  TypeImage,
  TypeVideo,
  TypeFolder,
  TypeModule,
  TypeProject,
  TypeProjects,
  TypeImageList,
} from './types';

export {
  TypeTag,
  TypeFile,
  TypeLink,
  TypeImage,
  TypeVideo,
  TypeFolder,
  TypeModule,
  TypeProject,
  TypeProjects,
  TypeImageList,
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
): TypeProjects {
  const {
    code,
    name,
    tags,
    description,
    detail = '',
    repos = [],
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
    repos,
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
  ...parseProject(vueBitrix24, getImages(vueBitrix24.code)),
  ...parseProject(bitrix24Library, getImages(bitrix24Library.code)),
  ...parseProject(bitrix24CreateApp, getImages(bitrix24CreateApp.code)),
  ...parseProject(bitrix24StickersApp, getImages(bitrix24StickersApp.code)),
  ...parseProject(toWebpJson, getImages(toWebpJson.code)),
  ...parseProject(kiraSekira, getImages(kiraSekira.code)),
  ...parseProject(creablast, getImages(creablast.code)),
  ...parseProject(smartStop, getImages(smartStop.code)),
  ...parseProject(isMobile, getImages(isMobile.code)),
  ...parseProject(ios, getImages(ios.code)),
  ...parseProject(usm),
  ...parseProject(birthdaysCrm, getImages(birthdaysCrm.code)),
  ...parseProject(masterCrm, getImages(masterCrm.code)),
  ...parseProject(scenaPro, getImages(scenaPro.code)),
  ...parseProject(arbPro, getImages(arbPro.code)),
  ...parseProject(reactBitrix24, getImages(reactBitrix24.code)),
  ...parseProject(impTelegramBot, getImages(impTelegramBot.code)),
  ...parseProject(master, getImages(master.code)),
};
