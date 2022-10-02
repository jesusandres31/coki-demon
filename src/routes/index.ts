import { Router } from 'express';
import qr from './qr.routes';
import whatsapp from './whatsapp.routes';
import product from './product.routes';
import test from './test.routes';

const router = Router();

router.use('/api', qr, whatsapp, product, test);

export default router;
