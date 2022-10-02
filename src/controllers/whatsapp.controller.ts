import { NextFunction, Request, Response } from 'express';
import { whatsAppSvcs } from '../services';
import { SERVER_CONTACT } from '../constants';

class WhatsAppCtrl {
  /**
   * Get whatsapp contacts.
   */
  public getWhatsAppContacts = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const payload = await whatsAppSvcs.getWhatsAppContacts();
      return res.status(200).json(payload);
    } catch (e) {
      return next(e);
    }
  };

  /**
   * Send message.
   */
  public sendWhatsAppMessage = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    const { number, message } = req.body;
    try {
      const payload = await whatsAppSvcs.sendWhatsAppMessage(message, number);
      return res.status(200).json(payload);
    } catch (e) {
      return next(e);
    }
  };

  /**
   * get all contacts (name and number)
   */
  public getAllContacts = async () => {
    try {
      const allContacs = await whatsAppSvcs.getWhatsAppContacts();
      const contacts = allContacs
        .map(contact => ({
          name: contact.name,
          number: contact.id._serialized,
          server: contact.id.server,
        }))
        .filter(
          ({ name, number, server }) =>
            name && number && server === SERVER_CONTACT,
        );

      return contacts;
    } catch (e) {
      console.log(e);
    }
  };
}

export const whatsAppCtrl = new WhatsAppCtrl();
