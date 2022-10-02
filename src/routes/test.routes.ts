import { Router } from 'express';

const router = Router();

/**
 * Get test script.
 * @method get
 */
router.route('/test').get(async (req, res, next) => {
  try {
    return res.status(200).json(req);
  } catch (e) {
    return next(e);
  }
});

export default router;
