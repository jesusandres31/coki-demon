import { Router } from 'express';
import fs from 'fs';

const router = Router();

/**
 * Get qr.
 * @method get
 */
router.route('/qr').get((req, res) => {
  res.writeHead(200, { 'content-type': 'image/svg+xml' });
  fs.createReadStream(`${__dirname}/../../../static/qr-code.svg`).pipe(res);
});

export default router;
