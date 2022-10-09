import { IProduct } from '../interfaces';
import { access } from '../libs';

class ProductSvcs {
  /**
   * Get enabled products.
   */
  public getProducts = async (): Promise<IProduct[]> => {
    const products: IProduct[] = await access.query(
      `SELECT Descripcion1, Precio01 
      FROM Articulos 
      WHERE Estado = 1
      ORDER BY Descripcion1 ASC;`,
    );
    return products;
  };

  /**
   * Search products.
   */
  public searchProducts = async (filter: string): Promise<IProduct[]> => {
    const products: IProduct[] = await access.query(
      `SELECT Descripcion1, Precio01 
      FROM Articulos 
      WHERE Estado = 1 AND
      Descripcion1 ALIKE '%${filter}%'
      ORDER BY Descripcion1 ASC;`,
    );
    return products;
  };
}

export const productSvcs = new ProductSvcs();
