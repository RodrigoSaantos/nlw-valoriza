import { getCustomRepository } from "typeorm";
import { Compliment } from "../entities/Compliment";
import { ComplimentsRepository } from "../repositories/ComplimentsRepository";
import { UsersRepository } from "../repositories/UsersRepository";

interface IComplimentRequest {
  tag_id: string;
  user_sender: string;
  user_receiver: string;
  message: string;
}

class CreateComplimentService {
  async execute({ 
    tag_id, 
    user_sender, 
    user_receiver, 
    message
   }: IComplimentRequest): Promise<Compliment>  {
     const complimentsRepository = getCustomRepository(ComplimentsRepository);
     const usersRepository = getCustomRepository(UsersRepository);

     if (user_sender === user_receiver) {
      throw new Error('You can not make a compliment to your self')
     }

     const userReceiverExists = await usersRepository.findOne(user_receiver);

     if (!userReceiverExists) {
       throw new Error('User Receiver does not exists!');
     }

     const compliment = complimentsRepository.create({
       tag_id,
       user_receiver,
       user_sender,
       message,
     });

     await complimentsRepository.save(compliment);

     return compliment;
   }

}

export { CreateComplimentService };