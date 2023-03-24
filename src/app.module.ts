import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PatientModule } from './patient/patient.module';

import env from './config/env';

@Module({
  imports: [MongooseModule.forRoot(env.MONGO_URL), PatientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
