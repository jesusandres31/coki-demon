import { createLogger, transports, format } from 'winston';
import path from 'path';

const logger = createLogger({
  format: format.combine(
    format.simple(),
    format.timestamp(),
    format.printf(info => `[${info.timestamp}] ${info.level}: ${info.message}`),
  ),
  transports: [
    new transports.File({
      filename: path.join(__dirname, '../../../logs/logs.log'),
      maxsize: 5120000,
      maxFiles: 10,
    }),
    new transports.Console({
      level: 'debug',
    }),
  ],
});

export default logger;
