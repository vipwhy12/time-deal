import { Body, Controller, Post, Get, ValidationPipe } from '@nestjs/common';
import { AuthCredentialsDto } from './auth-credential.dto';
import { AuthService } from './auth.service';
import { User } from './user.entity';

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

  @Post('/signIn')
  singIn(
    @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto,
  ): Promise<string> {
    return this.authService.singIn(authCredentialsDto);
  }
}
