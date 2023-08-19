import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { AuthCredentialsDto } from './auth-credential.dto';

@Injectable()
export class AuthService {
  constructor(private userRepository: UserRepository) { }

  async singUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return await this.userRepository.createUser(authCredentialsDto);
  }
}
