import { IsString, IsEnum, IsEmail, IsOptional } from 'class-validator';
import { UserTypeEnum } from '../enums';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  @IsEnum(UserTypeEnum)
  user_type: UserTypeEnum;

  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  @IsEmail()
  email: string;
}
