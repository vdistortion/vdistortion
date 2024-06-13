import type { TypeModule } from '../types';

export const module: TypeModule = {
  code: 'imp-telegram-bot',
  name: '😈 ImpBot 😈',
  description: 'Бот для Telegram',
  detail: `
Использует библиотеку <strong>Telegraf</strong>, крутится на Netlify, написан на <strong>TypeScript</strong>.
<br>
У этого тестового бота нет специализации, самое полезное это погода.
<br>
И котики, все же прекрасно знают, для чего был придуман интернет. 🤭
`,
  repos: [
    {
      name: 'GitHub',
      url: 'imp-telegram-bot',
    },
  ],
  links: [
    {
      name: 'Telegram',
      url: 'https://t.me/ImpTelegramBot',
    },
  ],
  tags: [
    'github',
    'bot',
    'telegram',
    'nodejs',
    'ajax',
    'pet-project',
    'typescript',
  ],
};
