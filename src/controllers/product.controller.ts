import { NextFunction, Request, Response } from 'express';
import { IProduct } from '../interfaces';
import { logger } from '../libs';
import { productSvcs } from '../services';
import { formatDate, justOneSpace } from '../utils';

class ProductCtrl {
  /**
   * Get enabled products.
   */
  public getAllProductsTest = async (
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
   * Search products.
   */
  public searchProductsTest = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const { filter } = req.params;
      const payload = await productSvcs.searchProducts(filter);
      return res.status(200).json(payload);
    } catch (e) {
      return next(e);
    }
  };

  /**
   * Get enabled products.
   */
  public getAllProducts = async (): Promise<string> => {
    try {
      let response: string = `🤑 *Lista de precios (${formatDate(
        String(new Date()),
      )})* 🤑\n\n\n`;
      // get products
      const products = await productSvcs.getProducts();
      // for each product
      for (const product of products) {
        response =
          response +
          `• ${justOneSpace(product.Descripcion1)} ... *$ ${
            product.Precio01
          }* \n\n`;
      }
      return response;
    } catch (e) {
      logger.info(e);
      return '❌ Something went wrong!';
    }
  };

  /**
   * Search products.
   */
  public searchProducts = async (filter: string): Promise<string> => {
    try {
      let response: string = `🤑 *Lista de precios (${formatDate(
        String(new Date()),
      )})* 🤑\n\n\n`;
      // get products
      const products = await productSvcs.searchProducts(filter);
      // for each product
      for (const product of products) {
        response =
          response +
          `• ${justOneSpace(product.Descripcion1)} ... *$ ${
            product.Precio01
          }* \n\n`;
      }
      return response;
    } catch (e) {
      logger.info(e);
      return '❌ Something went wrong!';
    }
  };
}

export const productCtrl = new ProductCtrl();
