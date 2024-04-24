import qrcode from 'qrcode-terminal';
import { Client, LocalAuth } from 'whatsapp-web.js';
import fs from 'fs';
import config from '../config';
import qr from 'qr-image';

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: { headless: true },
  webVersionCache: {
    type: 'remote',
    remotePath:
      'https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2410.1.html',
  },
});

export const startWhatsApp = async () => {
  client.on('qr', async (base64: string) => {
    let qr_svg = qr.image(base64, { type: 'svg', margin: 4 });
    await qr_svg.pipe(
      require('fs').createWriteStream(
        `${__dirname}/../../../static/qr-code.svg`,
      ),
    );
    console.log(
      `⚡ QR is updated every minute. Refresh the browser with F5 to get the latest code`,
    );
    qrcode.generate(base64, { small: true });
    console.log(`See QR http://localhost:${config.port}/api/qr`);
  });

  client.on('ready', () => {
    console.log('✔️ Client is ready!');
  });

  client.on('auth_failure', e => {
    console.log(e);
    console.log(
      "❌ Authentication error. Regenerate the QRCODE (Deleting the 'session' folder).",
    );
    const dir = `${__dirname}/../../../session`;
    try {
      fs.rmdirSync(dir, { recursive: true });
      console.log(`${dir} is deleted!`);
    } catch (err) {
      console.error(`Error while deleting ${dir}.`);
    }
  });

  client.on('authenticated', () => {
    console.log('AUTHENTICATED');
  });

  client.initialize();
};

export default client;
