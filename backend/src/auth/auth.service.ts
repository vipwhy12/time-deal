import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { AuthCredentialsDto } from './auth-credential.dto';
import { User } from './user.entity';
import * as CryptoJS from 'crypto-js';
import {
  ConflictException,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';


@Injectable()
export class AuthService {
  constructor(private userRepository: UserRepository) { }

  async getAll(): Promise<User[]> {
    return this.userRepository.getAll();
  }

  async singUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    try {
      await this.userRepository.createUser(authCredentialsDto);
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('💥유저의 이름이 이미 존재합니다!');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async singIn(authCredentialsDto: AuthCredentialsDto): Promise<string> {
    const secretKey = process.env.CRYPTOJS_KEY;
    const authCredentialsDtoPassword = CryptoJS.AES.decrypt(
      authCredentialsDto.password,
      secretKey,
    ).toString(CryptoJS.enc.Utf8);

    try {
      const user = await this.userRepository.singIn(authCredentialsDto);

      //비밀번호 복호화
      const userPassword = CryptoJS.AES.decrypt(
        user.password,
        secretKey,
      ).toString(CryptoJS.enc.Utf8);

      //비밀번호 검증 로직
      if (user && authCredentialsDtoPassword === userPassword) {
        return '로그인성공';
      } else {
        throw new UnauthorizedException('로그인 실패');
      }
    } catch (error) {
      throw new NotFoundException(`🥲 아이디와 비밀번호를 찾을 수 없습니다.`);
    }
  }
}
