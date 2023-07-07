import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 8080
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform : true
  }));
  app.enableCors();
  await app.listen(port);
  Logger.log(`🚀Application running on port ${port}`)

}
bootstrap();
