import { Server } from '../types';

/**
 * servers
 */
export const SERVER_CONTACT: Server = 'c.us';
export const SERVER_GROUP: Server = 'g.us';

/**
 * cron
 */
export const CRON_EXPRESSION = process.env.CRON_EXPRESSION || '';
export const TIME_ZONE = 'America/Buenos_Aires';

/**
 * wpp notification group id
 */
export const NOTIF_GROUP_ID = process.env.NOTIF_GROUP_ID || '';

/**
 * database
 */
export const DB_PATH = process.env.DB_PATH || '';

/**
 * drive
 */
export const DRIVE_DB_FOLDER_ID = process.env.DRIVE_DB_FOLDER_ID || '';
export const DB_NAME = 'coki-base.mdb';

/**
 * telegram
 */
export const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN || '';
