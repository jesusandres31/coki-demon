const cron = require('node-cron');
const path = require('path');
const { exec } = require('child_process');

const CRON_EXPRESSION = '0 0 * * *';
const TIME_ZONE = 'America/Buenos_Aires';

(async () => {
  console.log('Scheduler started.');
  cron.schedule(
    CRON_EXPRESSION,
    async () => {
      try {
        const directoryPath = path.resolve(__dirname, '../');
        const stopCommand = 'npm run stop';
        const installCommand = 'npm i whatsapp-web.js';
        const startCommand = 'npm run start';

        await executeCommand(stopCommand, directoryPath);
        console.log('Aplicación detenida con éxito');

        await executeCommand(installCommand, directoryPath);
        console.log('Dependencias instaladas con éxito');

        await executeCommand(startCommand, directoryPath);
        console.log('Aplicación iniciada con éxito');
      } catch (e) {
        console.log(e);
      }
    },
    { timezone: TIME_ZONE },
  );
})();

async function executeCommand(command, directoryPath) {
  return new Promise((resolve, reject) => {
    exec(command, { cwd: directoryPath }, (error, stdout, stderr) => {
      if (error) {
        reject(new Error(`Error al ejecutar el comando: ${error.message}`));
        return;
      }
      resolve();
    });
  });
}
