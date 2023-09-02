import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import { config } from 'dotenv';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 8080;

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  const corsOptions: CorsOptions = {
    origin: 'http://localhost:3000', // 허용할 origin 지정
    credentials: true, // withCredentials 옵션을 사용하기 위해 true로 설정합니다.
  };

  app.enableCors(corsOptions); // CORS 활성화
  config();
  await app.listen(port);
  app.use(cookieParser());
  Logger.log(`🚀Application running on port ${port}`);
}
bootstrap();
