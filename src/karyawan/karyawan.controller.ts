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
import { KaryawanService } from './karyawan.service';
import { CreateKaryawanDto } from './dto/create-karyawan.dto';
import { UpdateKaryawanDto } from './dto/update-karyawan.dto';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Public } from 'src/auth/decorators/public.decorator';
2
// @UseGuards(RolesGuard)
@Controller('karyawan')
export class KaryawanController {
  constructor(private readonly karyawanService: KaryawanService) {}

  @Post()
  create(@Body() createKaryawanDto: CreateKaryawanDto) {
    return this.karyawanService.create(createKaryawanDto);
  }

  // @Roles('admin')
  @Get()
  findAll() {
    return this.karyawanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.karyawanService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateKaryawanDto: UpdateKaryawanDto,
  ) {
    return this.karyawanService.update(+id, updateKaryawanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.karyawanService.remove(+id);
  }
}
