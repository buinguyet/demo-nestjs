import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { UserTypeEnum } from '../enums';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @IsEnum(UserTypeEnum)
  user_type: UserTypeEnum;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;
}
