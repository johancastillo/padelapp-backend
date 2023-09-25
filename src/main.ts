import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});
  
  

  const PORT = 8081
  await app.listen(PORT);


  /*
  #####################
  # Documentation API #
  #####################
  */
 const config = new DocumentBuilder()
  .setTitle("Padel App API")
  .setDescription("This is one api documentation.")
  .setVersion("1.0")
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("docs", app, document);


  /*
  ########
  # CORS #
  ########
  */
  app.enableCors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  });

  console.log(`Runing in port ${PORT}`)
}
bootstrap();
