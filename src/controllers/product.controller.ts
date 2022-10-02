import { NextFunction, Request, Response } from 'express';
import { getProductsList } from '../helpers';
import { productSvcs } from '../services';

class ProductCtrl {
  /**
   * Get enabled products.
   */
  public getProducts = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const payload = await productSvcs.getProducts();
      return res.status(200).json(payload);
    } catch (e) {
      return next(e);
    }
  };

  /**
   * Get pdf products list.
   */
  public getProductsList = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const payload = await getProductsList();
      return res.status(200).json(payload);
    } catch (e) {
      return next(e);
    }
  };
}

export const productCtrl = new ProductCtrl();
