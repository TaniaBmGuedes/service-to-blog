import {
  BadRequestException,
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { HashingService } from 'src/common/hasing/hashig.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdatePasswordDto } from './dto/update-passoword.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly hashingService: HashingService,
  ) {}
  async findOneByOrFail(userData: Partial<User>) {
    const user = await this.userRepository.findOneBy(userData);
    if (!user) {
      throw new BadRequestException('User not foundd');
    }
    return user;
  }
  async findOneByEmailOrFail(email: string) {
    const exists = await this.userRepository.existsBy({
      email,
    });

    if (exists) {
      throw new ConflictException('E-mail already exists');
    }
  }

  async create(dto: CreateUserDto) {
    await this.findOneByEmailOrFail(dto.email);

    const hashedPassword = await this.hashingService.hash(dto.password);
    const newUser: CreateUserDto = {
      name: dto.name,
      email: dto.email,
      password: hashedPassword,
    };

    const created = await this.userRepository.save(newUser);
    return created;
  }

  findByEmail(email: string) {
    return this.userRepository.findOneBy({ email });
  }

  findById(id: string) {
    return this.userRepository.findOneBy({ id });
  }

  save(user: User) {
    return this.userRepository.save(user);
  }
  async update(id: string, dto: UpdateUserDto) {
    if (!dto.name && !dto.email) {
      throw new BadRequestException('Data not sended');
    }
    const user = await this.findOneByOrFail({ id });
    user.name = dto.name ?? user.name;

    if (dto.email && dto.email != user.email) {
      await this.findOneByEmailOrFail(dto.email);
      user.email = dto.email;
      user.forceLogout = true;
    }
    return this.save(user);
  }

  async updatePassword(id: string, dto: UpdatePasswordDto) {
    const user = await this.findOneByOrFail({ id });

    const isCurrentPasswordValid = await this.hashingService.compare(
      dto.currentPassword,
      user.password,
    );

    if (!isCurrentPasswordValid) {
      throw new UnauthorizedException('New password is invalid');
    }

    user.password = await this.hashingService.hash(dto.newPassword);
    user.forceLogout = true;

    return this.save(user);
  }

  async remove(id: string) {
    const user = await this.findOneByOrFail({ id });
    await this.userRepository.delete({ id });
    return user;
  }
}
