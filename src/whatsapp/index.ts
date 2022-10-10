import { NOTIF_GROUP_ID } from '../constants';
import { client } from '../libs';
import { wppCommands } from '../helpers';

/**
 * wpp setup
 */
export const setupWppMessages = async () => {
  client.on('message_create', async msg => {
    await wppCommands(msg);
  });

  /* client.on('message', async msg => {
    await wppCommands(msg);
  }); */
};
