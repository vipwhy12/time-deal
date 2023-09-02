import {
  Body,
  Controller,
  Post,
  Get,
  ValidationPipe,
  Res,
} from '@nestjs/common';
import { AuthCredentialsDto } from './auth-credential.dto';
import { AuthService } from './auth.service';
import { User } from './user.entity';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Get()
  getAll(): Promise<User[]> {
    return this.authService.getAll();
  }

  @Post('/signUp')
  signUp(
    @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto,
  ): Promise<void> {
    return this.authService.singUp(authCredentialsDto);
  }

  // Promise<{ accessToken: string }>
  @Post('/signIn')
  async singIn(
    @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto,
    @Res() res: Response,
  ) {
    const jwt = await this.authService.singIn(authCredentialsDto);
    res.cookie('auth', jwt, { httpOnly: true, maxAge: 3600000 });
    return res.send({
      message: 'success',
    });
  }
}
