import { Request, Response } from 'express';

import { GetLastThreeMessagesService } from '../services/GetLastThreeMessagesService';

class GetLastThreeMessagesController {
  async handle(request: Request, response: Response) {
    const service = new GetLastThreeMessagesService();

    try {
      const messages = await service.execute();

      return response.json(messages);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { GetLastThreeMessagesController };
