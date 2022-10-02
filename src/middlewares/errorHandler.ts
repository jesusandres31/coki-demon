import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';

/**
 * Global error handler.
 */
export const errorHandler: ErrorRequestHandler = (
  err: IHttpError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // get code
  const { code: errorCode, message, hint, status } = err || {};

  // Default status code
  let statusCode = 500;

  // return json
  return res.status(status || statusCode).json({ message, hint, errorCode });
};
