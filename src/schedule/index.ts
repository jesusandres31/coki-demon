import cron from 'node-cron';
import {
  CRON_EXPRESSION,
  PATH_FROM,
  PATH_TO,
  TIME_ZONE as timezone,
} from '../constants';
import fs from 'fs';

/**
 * cron job
 */
const setupScheduler = () => {
  cron.schedule(
    CRON_EXPRESSION,
    () => {
      try {
        if (PATH_FROM && PATH_TO) {
          // Lee el contenido del archivo en PATH_FROM
          const fileContent = fs.readFileSync(PATH_FROM);

          // Escribe el contenido en PATH_TO
          fs.writeFileSync(PATH_TO, fileContent);

          console.log(`Archivo copiado de ${PATH_FROM} a ${PATH_TO}`);
        }
        console.log(`PATH_FROM and PATH_TO no set`);
      } catch (e) {
        console.log(e);
      }
    },
    { timezone },
  );
};

export { setupScheduler };
