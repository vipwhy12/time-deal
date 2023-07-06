import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';


const PORT = 8080;
const handleListening = () => console.log(`✅ Server listenting on port ${PORT} 🚀 `);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform : true
  }));
  app.enableCors();
  await app.listen(PORT, handleListening);
}
bootstrap();
