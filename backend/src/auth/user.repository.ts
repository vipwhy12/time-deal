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

  async createUser(authCredentialsDto: AuthCredentialsDto): Promise<User> {
    const { username, password } = authCredentialsDto;
    const user = this.userRepository.create({ username, password });
    return await this.userRepository.save(user);
  }

  async singIn(authCredentialsDto: AuthCredentialsDto): Promise<User> {
    const { username } = authCredentialsDto;
    return await this.userRepository.findOneByOrFail({
      username: username,
    });
  }
}
