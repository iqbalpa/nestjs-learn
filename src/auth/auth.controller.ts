import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  registerUser() {
    this.authService.registerUser();
  }

  @Post('login')
  loginUser() {
    this.authService.loginUser();
  }

  @Get('user-detail')
  getUserDetail() {
    this.authService.getUserDetail();
  }

  @Put('update')
  updateUser() {
    this.authService.updateUser();
  }

  @Delete('delete')
  deleteUser() {
    this.authService.deleteUser();
  }
}
