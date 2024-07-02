import bot from '../libs/telegram';
import { splitMessage } from '../utils';
import { productCtrl } from '../controllers';

export const setupBot = () => {
  bot.start(ctx => {
    ctx.reply('hello');
  });

  bot.command(['l'], async ctx => {
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
