import { Router } from 'express';
import { productCtrl } from '../controllers';

const router = Router();

/**
 * Get enabled products.
 * @method get
 */
router.route('/products').get(productCtrl.getProducts);

/**
 * Get pdf products list.
 * @method get
 */
router.route('/products/pdf').get(productCtrl.getProductsList);

export default router;
