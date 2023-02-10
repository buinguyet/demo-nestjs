import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const checkExistEmail = await this.userRepository.findOne({
        where: { email: createUserDto.email },
      });

      if (checkExistEmail) {
        throw new HttpException('Email is already exist', HttpStatus.CONFLICT);
      }

      return this.userRepository.save(createUserDto);
    } catch (error) {
      throw new HttpException('Could not create user', HttpStatus.BAD_REQUEST);
    }
  }

  async findAll() {
    return this.userRepository.find();
  }

  async findOne(id: number) {
    try {
      const user = await this.userRepository.findOne({
        where: { user_id: id },
      });

      if (!user) {
        throw new HttpException('Not found user', HttpStatus.NOT_FOUND);
      }
    } catch (error) {
      throw new HttpException('Not found user', HttpStatus.NOT_FOUND);
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.findOne(id);

    try {
      return this.userRepository.update(id, updateUserDto);
    } catch (error) {
      throw new HttpException('Could not update user', HttpStatus.BAD_REQUEST);
    }
  }

  async remove(id: number) {
    await this.findOne(id);

    try {
      return this.userRepository.update(id, { active: false });
    } catch (error) {
      throw new HttpException('Could not delete user', HttpStatus.BAD_REQUEST);
    }
  }
}
