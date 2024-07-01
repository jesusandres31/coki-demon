import bot from '../libs/telegram';
import { productCtrl } from './product.controller';

export const telegramCtlr = () => {
  bot.start(async ctx => {
    try {
      const payload = await productCtrl.getAllProducts();
      const messageParts = splitMessage(payload);

      for (const part of messageParts) {
        await ctx.reply(part, { parse_mode: 'Markdown' });
      }
    } catch (error) {
      console.error(error);
      await ctx.reply('An error occurred while fetching the products.');
    }
  });
};

const MAX_MESSAGE_LENGTH = 4096;

const splitMessage = (
  message: string,
  maxLength: number = MAX_MESSAGE_LENGTH,
) => {
  const parts = [];
  while (message.length > maxLength) {
    let chunk = message.slice(0, maxLength);
    const lastNewline = chunk.lastIndexOf('\n');
    if (lastNewline > -1) {
      chunk = chunk.slice(0, lastNewline + 1);
    }
    parts.push(chunk);
    message = message.slice(chunk.length);
  }
  parts.push(message);
  return parts;
};
