import { Body, Controller, Post } from '@nestjs/common';
import { createPatientDto } from './dto/create-patient.dto';
import { PatientDto } from './dto/patient.dto';

import { PatientService } from './patient.service';

@Controller('patient')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Post()
  create(@Body() createPatient: createPatientDto): PatientDto {
    return this.patientService.create(createPatient);
  }
}
