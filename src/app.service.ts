import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  sapaWarga(id: string): string {
    return `Halo Warga ${id}!`;
  }

  sapaQuery(name: string): string {
    return `Halo ${name}, Selamat datang!`;
  }

  postWarga(data: string): string {
    return `Data ${data} berhasil ditambahkan!`;
  }
}
