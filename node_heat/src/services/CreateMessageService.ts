import { io } from '../app';
import { prismaClient } from '../prisma';

class CreateMessageService {
  async execute(user_id: string, text: string) {
    const message = await prismaClient.message.create({
      data: { user_id, text },
      include: { user: true },
    });

    const infoWS = {
      user_id: message.user_id,
      text: message.text,
      created_at: message.created_at,
      user: { name: message.user.name, avatar_url: message.user.avatar_url },
    };

    io.emit('new_message', infoWS);

    return message;
  }
}

export { CreateMessageService };
