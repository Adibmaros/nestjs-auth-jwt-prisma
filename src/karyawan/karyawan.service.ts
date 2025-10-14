import { Injectable } from '@nestjs/common';
import { CreateKaryawanDto } from './dto/create-karyawan.dto';
import { UpdateKaryawanDto } from './dto/update-karyawan.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class KaryawanService {
  constructor(private prismaService: PrismaService) {}

  create(createKaryawanDto: CreateKaryawanDto) {
    return this.prismaService.karyawan.create({
      data: createKaryawanDto,
    });
  }

  findAll() {
    return this.prismaService.karyawan.findMany();
  }

  findOne(id: number) {
    return this.prismaService.karyawan.findUnique({
      where: { id },
    });
  }

  update(id: number, updateKaryawanDto: UpdateKaryawanDto) {
    return this.prismaService.karyawan.update({
      where: { id },
      data: updateKaryawanDto,
    });
  }

  remove(id: number) {
    return this.prismaService.karyawan.delete({
      where: { id },
    });
  }
}
