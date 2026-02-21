import { module as elmirabai } from './modules/elmirabai';
import { module as nebuloud } from './modules/nebuloud';
import { module as arbPro } from './modules/arb-pro';
import { module as transportInfoterminal } from './modules/transport-infoterminal';
import { module as doctorAppointment } from './modules/doctor-appointment';
import { module as opticalNetworkUi } from './modules/optical-network-ui';
import { module as birthdays } from './modules/birthdays';
import { module as masterCrm } from './modules/master-crm';
import { module as uiBitrix24 } from './modules/ui-bitrix24';
import { module as toStaticImages } from './modules/to-static-images';
import { module as bitrix24CreateApp } from './modules/bitrix24-create-app';
import { module as bitrix24Library } from './modules/bitrix24-library';
import { module as bitrix24PricingApp } from './modules/bitrix24-pricing-app';
import { module as bitrix24StickersApp } from './modules/bitrix24-stickerpack-app';
import { module as kiraSekira } from './modules/kira-sekira';
import { module as creablast } from './modules/creablast';
import { module as flagConnect } from './modules/flag-connect';
import { module as bot } from './modules/imp-telegram-bot';
import directories from './structure.json';
import type {
  TypeTech,
  TypeFile,
  TypeLink,
  TypeImage,
  TypeFolder,
  TypeModule,
  TypeAllTag,
  TypeProject,
  TypeProjects,
  TypeImageList,
} from './types';

export type {
  TypeTech,
  TypeFile,
  TypeLink,
  TypeImage,
  TypeFolder,
  TypeModule,
  TypeAllTag,
  TypeProject,
  TypeProjects,
  TypeImageList,
};

function getImages(folderName: string) {
  const folder: TypeFolder = directories.find((dir: TypeFolder) => dir.name === folderName)!;
  return folder.children.map((file: TypeFile) => ({
    file: file.name,
    path: `images/projects/${folderName}/${file.name}`,
    width: file.width,
    height: file.height,
  }));
}

function parseProject(project: TypeModule, imagesList: TypeImageList[] = []): TypeProjects {
  const {
    code,
    name,
    tags,
    tech,
    description,
    detail = '',
    repos = [],
    links = [],
    imageNames = {},
  } = project;

  const images = imagesList.map((image) => ({
    title: imageNames[image.file] ?? '',
    src: image.path,
    width: image.width,
    height: image.height,
  }));

  const result: TypeProject = {
    name,
    description,
    detail,
    repos,
    links,
    tags,
    tech,
    images,
  };

  return {
    [code]: result,
  };
}

export const projects: TypeProjects = {
  ...parseProject(uiBitrix24, getImages(uiBitrix24.code)),
  ...parseProject(bitrix24Library, getImages(bitrix24Library.code)),
  ...parseProject(bitrix24CreateApp, getImages(bitrix24CreateApp.code)),
  ...parseProject(bitrix24StickersApp, getImages(bitrix24StickersApp.code)),
  ...parseProject(toStaticImages, getImages(toStaticImages.code)),
  ...parseProject(kiraSekira, getImages(kiraSekira.code)),
  ...parseProject(creablast, getImages(creablast.code)),
  ...parseProject(bot, getImages(bot.code)),
  ...parseProject(transportInfoterminal, getImages(transportInfoterminal.code)),
  ...parseProject(doctorAppointment, getImages(doctorAppointment.code)),
  ...parseProject(opticalNetworkUi, getImages(opticalNetworkUi.code)),
  ...parseProject(birthdays, getImages(birthdays.code)),
  ...parseProject(masterCrm, getImages(masterCrm.code)),
  ...parseProject(arbPro, getImages(arbPro.code)),
  ...parseProject(elmirabai),
  ...parseProject(nebuloud),
  ...parseProject(flagConnect),
  ...parseProject(bitrix24PricingApp),
};
