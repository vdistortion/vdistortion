import type { TypeModule } from '../types';

export const module: TypeModule = {
  code: 'flag-connect',
  name: 'Flag Connect',
  description: 'Обучающая мини-игра на знание флагов и стран с адаптацией под Telegram Mini Apps',
  detail: `
SPA-приложение с игровой механикой на Angular/TypeScript. Реализована логика викторины с выбираемой сложностью.
Игроку предлагается угадать страну по флагу и наоборот, с настраиваемым количеством вариантов ответов.
Архитектура позволяет использовать приложение как standalone веб-сайт, так и в качестве Telegram Mini App.
`,
  tags: ['angular', 'all'],
  tech: ['angular', 'typescript', 'scss'],
};
