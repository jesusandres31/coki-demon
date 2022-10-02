import cron from 'node-cron';
import { CRON_EXPRESSION, TIME_ZONE as timezone } from '../constants';

/**
 * cron job
 */
const setupScheduler = async () => {
  cron.schedule(
    CRON_EXPRESSION,
    async () => {
      try {
        console.log('hello');
      } catch (e) {
        console.log(e);
      }
    },
    { timezone },
  );
};

export { setupScheduler };
