import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest): Promise<string> {
    const userRepository = getCustomRepository(UsersRepository);

    const user = await userRepository.findOne({
      email,
    });

    if (!user) {
      throw new Error('Email/Password is incorrect')
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error('Email/Password is incorrect')
    }

    const token = sign(
      { email: user.email },
      '7c6df2e38194ec7c64ac56152d961939', 
      { subject: user.id, expiresIn: '1d' },
    );

    return token;
  }
}

export { AuthenticateUserService };