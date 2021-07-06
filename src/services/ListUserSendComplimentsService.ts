import { getCustomRepository } from "typeorm";
import { Compliment } from "../entities/Compliment";
import { ComplimentsRepository } from "../repositories/ComplimentsRepository";

class ListUserSendComplimentsService {

  async execute(user_id: string):Promise<Compliment[]> {
    const complimentsRepository = getCustomRepository(ComplimentsRepository);
    const compliments = await complimentsRepository.find({
      where: {
        user_sender: user_id,
      },
      relations: ['userSender', 'userReceiver', 'tag'],
    });

    return compliments;
  }
}

export { ListUserSendComplimentsService };
