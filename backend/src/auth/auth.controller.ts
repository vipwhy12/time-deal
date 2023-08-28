import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthCredentialsDto } from './auth-credential.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

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
