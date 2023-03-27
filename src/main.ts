import * as dotenv from 'dotenv';
dotenv.config();

import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import env from './config/env.js';
import { Logger, ValidationPipe } from '@nestjs/common';

const portNumber = env.NODE_PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('carefy-desafio-backend')
    .setDescription('Backend API for carefy-desafio')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  app.enableCors();

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(portNumber);
  Logger.log(`Application running on port ${portNumber} - ${env.NODE_ENV}`);
}

bootstrap();
