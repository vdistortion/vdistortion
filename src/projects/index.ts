import directories from './structure.json';
import type {
  TypeTech,
  TypeFile,
  TypeFolder,
  TypeAllTag,
  ProjectLink,
  ProjectImage,
  Project,
  Projects,
} from './types';

export type { TypeTech, TypeAllTag, ProjectLink, ProjectImage, Project, Projects };

export function getImages(
  folderName: string,
  imageNames: Record<string, string> = {},
): ProjectImage[] {
  const folder: TypeFolder | undefined = directories.find(
    (dir: TypeFolder) => dir.name === folderName,
  );
  if (!folder) return [];
  return folder.children.map((file: TypeFile) => ({
    title: imageNames[file.name] ?? '',
    src: `images/projects/${folderName}/${file.name}`,
    width: file.width,
    height: file.height,
  }));
}

import { module as uiBitrix24 } from './modules/ui-bitrix24';
import { module as bitrix24Library } from './modules/bitrix24-library';
import { module as bitrix24CreateApp } from './modules/bitrix24-create-app';
import { module as bitrix24StickersApp } from './modules/bitrix24-stickerpack-app';
import { module as toStaticImages } from './modules/to-static-images';
import { module as kiraSekira } from './modules/kira-sekira';
import { module as creablast } from './modules/creablast';
import { module as bot } from './modules/imp-telegram-bot';
import { module as transportInfoterminal } from './modules/transport-infoterminal';
import { module as doctorAppointment } from './modules/doctor-appointment';
import { module as opticalNetworkUi } from './modules/optical-network-ui';
import { module as birthdays } from './modules/birthdays';
import { module as masterCrm } from './modules/master-crm';
import { module as arbPro } from './modules/arb-pro';
import { module as elmirabai } from './modules/elmirabai';
import { module as nebuloud } from './modules/nebuloud';
import { module as flagConnect } from './modules/flag-connect';
import { module as bitrix24PricingApp } from './modules/bitrix24-pricing-app';

export const projects: Projects = {
  [uiBitrix24.id]: uiBitrix24,
  [bitrix24Library.id]: bitrix24Library,
  [bitrix24CreateApp.id]: bitrix24CreateApp,
  [bitrix24StickersApp.id]: bitrix24StickersApp,
  [toStaticImages.id]: toStaticImages,
  [kiraSekira.id]: kiraSekira,
  [creablast.id]: creablast,
  [bot.id]: bot,
  [transportInfoterminal.id]: transportInfoterminal,
  [doctorAppointment.id]: doctorAppointment,
  [opticalNetworkUi.id]: opticalNetworkUi,
  [birthdays.id]: birthdays,
  [masterCrm.id]: masterCrm,
  [arbPro.id]: arbPro,
  [elmirabai.id]: elmirabai,
  [nebuloud.id]: nebuloud,
  [flagConnect.id]: flagConnect,
  [bitrix24PricingApp.id]: bitrix24PricingApp,
};

export const urls = Object.keys(projects);
