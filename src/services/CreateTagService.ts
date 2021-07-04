import { getCustomRepository } from "typeorm";
import { Tag } from "../entities/Tag";
import { TagsRepository } from "../repositories/TagsRepository";

interface ITagRequest {
  name: string;
}

class CreateTagService {

  async execute({ name }: ITagRequest): Promise<Tag> {
    const tagsRepository = getCustomRepository(TagsRepository);

    if (!name) {
      throw new Error('Name is required');
    }

    const tagAlreadyExists = await tagsRepository.findOne({
      name,
    });

    if (tagAlreadyExists) {
      throw new Error('Tag already exists');
    }

    const tag = tagsRepository.create({
      name,
    });

    await tagsRepository.save(tag);


    return tag;
  }
}

export { CreateTagService };