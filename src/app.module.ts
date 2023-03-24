import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientController } from './patient/patient.controller';
import { PatientService } from './patient/patient.service';

@Module({
  imports: [],
  controllers: [AppController, PatientController],
  providers: [AppService, PatientService],
})
export class AppModule {}
