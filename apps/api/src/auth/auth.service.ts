import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../database/prisma.service';
import { RegisterInputDto } from '@schemas/auth/auth.dto';
import { UserAlreadyExistsException } from './auth.exceptions';
import { LoginInputDto } from '@schemas/auth/auth.dto';
import { JwtService } from '@nestjs/jwt';

const SALT_ROUNDS = 10;

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async register(
    dto: RegisterInputDto,
  ): Promise<{ id: string; email: string; name: string }> {
    const existing = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (existing) {
      throw new UserAlreadyExistsException();
    }

    const passwordHash = await bcrypt.hash(dto.password, SALT_ROUNDS);

    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        passwordHash,
        name: `${dto.name} ${dto.lastName}`,
      },
      select: {
        id: true,
        email: true,
        name: true,
      },
    });

    return user;
  }

  async validateUser(dto: LoginInputDto): Promise<any> {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });
    if (user && (await bcrypt.compare(dto.password, user.passwordHash))) {
      const { passwordHash, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { sub: user.id, email: user.email };
    return {
      id: user.id,
      email: user.email,
      token: this.jwtService.sign(payload),
    };
  }
}
