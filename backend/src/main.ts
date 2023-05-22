import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // CORS を有効にする
  app.use(
    cors({
      origin: 'http://localhost:5173', // 許可するオリジンを指定します
      allowedHeaders: ['Content-Type', 'Authorization'], // 許可するヘッダーを指定します
    }),
  );

  await app.listen(3000);
}
bootstrap();
