import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Sentinela')
    .setDescription('The Sentinela API description')
    .setVersion('1.0')
    .addTag('sentinela')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.setGlobalPrefix('v1/:tenant?/api');
  //app.setGlobalPrefix('v1/api/:tenant?'); v1/:tenant?/api
  await app.listen(AppModule.port);
}
bootstrap();
