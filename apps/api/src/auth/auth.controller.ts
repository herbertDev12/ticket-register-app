import {
  Body,
  Controller,
  HttpCode,
  Request,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  LoginInputDto,
  LoginOutputDto,
  RegisterInputDto,
} from '@schemas/auth/auth.dto';
import { AuthService } from './auth.service';
import {
  ApiBody,
  ApiTags,
  ApiOperation,
  ApiCreatedResponse,
} from '@nestjs/swagger';
import { LocalAuthGuard } from './local-auth.guard';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  @ApiOperation({ summary: 'Register a new user account' })
  @ApiBody({ type: RegisterInputDto })
  @ApiCreatedResponse({
    type: LoginOutputDto,
    description: 'User registered successfully, returns a JWT access token',
  })
  register(@Body() registerInputDto: RegisterInputDto) {
    return this.authService.register(registerInputDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('/login')
  @ApiOperation({ summary: 'Signin a user' })
  @ApiBody({ type: LoginInputDto })
  @ApiCreatedResponse({
    type: LoginOutputDto,
    description:
      'User logged successfully, returns the user ID, email and JWT token',
  })
  @UseGuards(LocalAuthGuard)
  async signIn(@Request() req) {
    return this.authService.login(req.user);
  }
}
