import { Router } from 'express';
import { productCtrl } from '../controllers';

const router = Router();

/**
 * Get enabled products.
 * @method get
 */
router.route('/products').get(productCtrl.getAllProductsTest);

/**
 * Search products.
 * @method get
 */
router.route('/products/:filter').get(productCtrl.searchProductsTest);

export default router;
