import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @IsEmail({}, { message: 'Invalided email' })
  email: string;
  @IsString({ message: 'Password must be a string' })
  @IsNotEmpty({ message: 'Passowod cannot be empty' })
  password: string;
}
