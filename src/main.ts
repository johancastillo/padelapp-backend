import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const PORT = 8081
  await app.listen(PORT);
  console.log(`Runing in port ${PORT}`)
}
bootstrap();
