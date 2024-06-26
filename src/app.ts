import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import config from './config';
import router from './routes';
import { errorHandler } from './middlewares';
import { setupScheduler } from './schedule';
import { startTelegramBot } from './libs';
import { setupBot } from './helper';

export class App {
  private app: Application;

  constructor() {
    this.app = express();
    this.settings();
    this.middlewares();
    this.routes();
    this.initialSetup();
  }

  private settings() {
    this.app.set('port', config.port);
  }

  private middlewares() {
    this.app.use(morgan('dev'));
    this.app.use(express.json());
    this.app.use(cors());
  }

  private routes() {
    this.app.use(router);
    this.app.use(errorHandler);
  }

  private async initialSetup() {
    setupScheduler();
    startTelegramBot();
    setupBot();
  }

  async listen(): Promise<void> {
    var server = this.app.listen(this.app.get('port'));
    if (process.env.NODE_ENV === 'production') {
      console.log('Production server on port', this.app.get('port'));
    } else {
      console.log('Dev server on port', this.app.get('port'));
    }
  }
}
