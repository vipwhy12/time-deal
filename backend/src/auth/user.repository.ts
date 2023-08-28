import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { AuthCredentialsDto } from './auth-credential.dto';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) { }

  async getAll(): Promise<User[]> {
    return await this.userRepository.find({
      select: {
        id: true,
        email: true,
        createdAt: true,
      },
    });
  }

  async createUser(authCredentialsDto: AuthCredentialsDto): Promise<User> {
    const { email, password } = authCredentialsDto;
    const user = this.userRepository.create({ email, password });
    return await this.userRepository.save(user);
  }

  async singIn(authCredentialsDto: AuthCredentialsDto): Promise<User> {
    const { email } = authCredentialsDto;
    return await this.userRepository.findOneByOrFail({
      email: email,
    });
  }
}
