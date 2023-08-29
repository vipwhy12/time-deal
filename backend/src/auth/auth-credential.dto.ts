import { IsString, MaxLength, MinLength } from 'class-validator';

export class AuthCredentialsDto {
  @IsString()
  @MinLength(2)
  @MaxLength(20)
  email: string;

  @IsString()
  @MinLength(4)
  @MaxLength(50)
  // @Matches(/^[a-zA-Z0-9]*$/, { message: 'Only alphabets and numbers allowed' })
  password: string;
}
