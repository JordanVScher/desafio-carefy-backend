import { HttpModule } from '@nestjs/axios';
import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GithubMiddleware } from '../middlewares/AuthMiddleware';
import { PatientController } from './patient.controller';
import { PatientService } from './patient.service';
import { Patient, PatientSchema } from './schemas/patient.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Patient.name, schema: PatientSchema }]),
    HttpModule,
  ],
  controllers: [PatientController],
  providers: [PatientService],
})
export class PatientModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(GithubMiddleware)
      .forRoutes(
        { path: '/patient/', method: RequestMethod.GET },
        { path: '/patient/', method: RequestMethod.POST },
        { path: '/patient/:id', method: RequestMethod.GET },
        { path: '/patient/:id', method: RequestMethod.PATCH },
        { path: '/patient/:id', method: RequestMethod.DELETE },
      );
  }
}
