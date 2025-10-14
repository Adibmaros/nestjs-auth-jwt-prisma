import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { Public } from '../auth/decorators/public.decorator';
import { Roles } from '../auth/decorators/roles.decorator';
import { RolesGuard } from '../auth/guards/roles.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }

  // contoh penggunaan custom decorator

  @Get('me')
  getCurrentUser(@CurrentUser() user: any) {
    return user;
  }

  // Route ini public (tidak butuh JWT)
  @Public()
  @Get('public')
  getPublicData() {
    return { message: 'This is public data' };
  }

  // Route dengan role guard (optional)
  @Roles('admin')
  @UseGuards(RolesGuard)
  @Get('admin-only')
  getAdminData(@CurrentUser() user: any) {
    return { message: 'Admin only data', user };
  }

  @Patch('profile')
  updateProfile(@CurrentUser() user: any, @Body() updateDto: any) {
    return this.userService.update(user.id, updateDto);
  }
}
