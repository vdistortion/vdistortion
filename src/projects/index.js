import arb from './modules/arb-pro';
import infomats from './modules/infomats';
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
import bot from './modules/bitrix24-stickerpack-bot';
import oldPages from './modules/old-pages';
import directories from './structure.json';

function getImages(folderName) {
  const folder = directories.find((dir) => dir.name === folderName);
  return folder.children.map((file) => ({
    file: file.name,
    path: `./images/projects/${folderName}/${file.name}`,
  }));
}

function parseProject(project, imagesList = []) {
  const {
    code,
    name,
    description = '',
    detail = '',
    link = null,
    tags = [],
    imageNames = {},
    videos = [],
  } = project;

  if (!code || !name) return {};

  const images = imagesList.map((image) => ({
    title: imageNames[image.file] ?? '',
    src: image.path,
  }));

  return {
    [code]: {
      name,
      description,
      detail,
      link,
      tags,
      images,
      videos,
    },
  };
}

export default {
  ...parseProject(vueb24, getImages('vue-bitrix24')),
  ...parseProject(create, getImages('bitrix24-create-app')),
  ...parseProject(bot, getImages('bitrix24-stickerpack-bot')),
  ...parseProject(arb, getImages('arb-pro')),
  ...parseProject(infomats, getImages('infomats')),
  ...parseProject(med, getImages('is-med')),
  ...parseProject(ios, getImages('ios')),
  ...parseProject(usm),
  ...parseProject(birthdays, getImages('birthdays')),
  ...parseProject(birthdaysCRM, getImages('birthdays-clients')),
  ...parseProject(constructor, getImages('constructor')),
  ...parseProject(scenapro, getImages('scenapro')),
  ...parseProject(nordw, getImages('nordw')),
  ...parseProject(oldPages, getImages('old-pages')),
};
