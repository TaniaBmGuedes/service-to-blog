import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UpdatePasswordDto {
  @IsString({ message: 'Password needs to be a string' })
  @IsNotEmpty({ message: 'Password cannot be empty' })
  currentPassword: string;

  @IsString({ message: 'New Password needs to be a string' })
  @IsNotEmpty({ message: 'New Password cannot be empty' })
  @MinLength(6, {
    message: 'New Passoword must have at least 6 characters',
  })
  newPassword: string;
}
