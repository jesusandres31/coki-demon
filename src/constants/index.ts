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
export const PATH_FROM = process.env.PATH_FROM || '';
export const PATH_TO = process.env.PATH_TO || '';

/**
 * wpp notification group id
 */
export const NOTIF_GROUP_ID = process.env.NOTIF_GROUP_ID || '';

/**
 * database
 */
export const DB_PATH = process.env.DB_PATH || '';
