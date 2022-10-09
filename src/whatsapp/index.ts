import { NOTIF_GROUP_ID } from '../constants';
import { client } from '../libs';
import { productCtrl } from '../controllers';
import { justOneSpace } from '../utils';

/**
 * wpp answers for messages
 */
export const setupWppMessages = async () => {
  client.on('message_create', async msg => {
    if (msg.to === NOTIF_GROUP_ID) {
      let sentMsg = '';

      // help
      sentMsg = msg.body.toLowerCase();
      if (sentMsg === '.h') {
        const payload = `*.l*: listar todos los productos.\n*.b*: buscar algunos productos.`;
        msg.reply(payload);
      }

      // products list
      sentMsg = msg.body.toLowerCase();
      if (sentMsg === '.l') {
        const payload = await productCtrl.getAllProducts();
        msg.reply(payload);
      }

      // search products
      sentMsg = justOneSpace(sentMsg).slice(0, 2);
      if (sentMsg === '.b') {
        const filter = justOneSpace(msg.body.toLowerCase()).replace('.b ', '');
        const payload = await productCtrl.searchProducts(filter);
        msg.reply(payload);
      }
    }
  });
};
