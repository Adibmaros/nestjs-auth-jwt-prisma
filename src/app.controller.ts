import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('halo')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('warga/:id')
  sapaWarga(@Param('id') id: string): string {
    return this.appService.sapaWarga(id);
  }

  @Get('/warga')
  sapaQuery(@Query('name') name: string): string {
    return this.appService.sapaQuery(name);
  }

  @Post('/warga')
  postWarga(@Body('data') data: string): string {
    return this.appService.postWarga(data);
  }
}
