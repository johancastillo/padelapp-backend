import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});
  
  

  const PORT = 8081
  await app.listen(PORT);

  app.enableCors({
    allowedHeaders: '*',
    origin: '*',
    credentials: true,
  });

  console.log(`Runing in port ${PORT}`)
}
bootstrap();
