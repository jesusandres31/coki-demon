import { IProduct } from '../interfaces';
import { access } from '../libs';

class ProductSvcs {
  /**
   * Get enabled products.
   */
  public getProducts = async (): Promise<IProduct[]> => {
    const users: IProduct[] = await access.query(
      'SELECT Descripcion1, Precio01 FROM Articulos WHERE Estado = 1;',
    );
    return users;
  };
}

export const productSvcs = new ProductSvcs();
