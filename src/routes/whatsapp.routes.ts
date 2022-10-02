import { Router } from 'express';
import { whatsAppCtrl } from '../controllers';

const router = Router();

/**
 * Get whatsapp contacts.
 * @method get
 */
router.route('/contacts').get(whatsAppCtrl.getWhatsAppContacts);

/**
 * Send message.
 * @method post
 */
router.route('/message').post(whatsAppCtrl.sendWhatsAppMessage);

export default router;
