import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


const PORT = 8080;
const handleListening = () => console.log(`✅ Server listenting on port ${PORT} 🚀 `);

async function serverListen() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, handleListening);
}
serverListen();
