import { prismaClient } from '../prisma';

class CreateMessageService {
  async execute(user_id: string, text: string) {
    const message = await prismaClient.message.create({
      data: { user_id, text },
      include: { user: true },
    });

    return message;
  }
}

export { CreateMessageService };
