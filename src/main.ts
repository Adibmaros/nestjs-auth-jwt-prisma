import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Izinkan CORS dari origin lain. Ganti '*' dengan origin spesifik untuk lingkungan produksi.
  app.enableCors({ origin: '*' });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
