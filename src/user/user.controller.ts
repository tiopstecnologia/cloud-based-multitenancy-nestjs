import { Body, Controller, Get, Post, Param } from '@nestjs/common';

import { UserService } from './user.service';
import { CreateUserDto, ReadUserDto } from './dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<ReadUserDto[]> {
    return this.userService.findAll();
  }

  @Post()
  async create(@Body() user: CreateUserDto, @Param('tenant') tenant): Promise<ReadUserDto> {
    console.log("data {} {}", user, tenant)
    user.tenantCode = tenant;
    return this.userService.create(user);
  }
}
