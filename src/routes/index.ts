import { Router } from 'express';
import product from './product.routes';
import test from './test.routes';

const router = Router();

router.use('/api', product, test);

export default router;
