import * as dotenv from 'dotenv';
dotenv.config();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import env from './config/env.js';
import { Logger, ValidationPipe } from '@nestjs/common';

const portNumber = env.NODE_PORT;
const corsAllowedOrigins = env.CORS_ALLOWED_ORIGINS_REGEX;

const headersList = [
  'Content-Type',
  'checkoutDataAccess',
  'authorization',
  'Access-Control-Allow-Origin',
  'Connection',
  'Origin',
  'user-agent',
  'X-Cobasi-Session',
  'X-Cobasi-Email',
  'Set-Cookie',
];

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: new RegExp(corsAllowedOrigins),
    allowedHeaders: headersList,
    exposedHeaders: headersList,
    credentials: true,
  });

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(portNumber);
  Logger.log(`Application running on port ${portNumber} - ${env.NODE_ENV}`);
}

bootstrap();
