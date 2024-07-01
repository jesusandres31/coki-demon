import { Telegraf } from 'telegraf';
import { TELEGRAM_TOKEN } from '../constants';

const bot = new Telegraf(TELEGRAM_TOKEN);

export default bot;

export const startTelegram = () => {
  bot.launch();
};
