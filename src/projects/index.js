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
import stickers from './modules/stickers';
import keram from './modules/keram';
import wp from './modules/white-print';

function parseProject(project) {
  const {
    code,
    name,
    description = '',
    detail = '',
    link = null,
    tags = [],
    images = [],
    videos = [],
  } = project;

  if (!code || !name) return {};

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
  ...parseProject(arb),
  ...parseProject(infomats),
  ...parseProject(med),
  ...parseProject(ios),
  ...parseProject(usm),
  ...parseProject(birthdays),
  ...parseProject(birthdaysCRM),
  ...parseProject(constructor),
  ...parseProject(scenapro),
  ...parseProject(nordw),
  ...parseProject(vueb24),
  ...parseProject(create),
  ...parseProject(bot),
  ...parseProject(stickers),
  ...parseProject(keram),
  ...parseProject(wp),
};
