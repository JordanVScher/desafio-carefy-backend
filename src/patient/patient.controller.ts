import { Body, Controller, Post } from '@nestjs/common';
import { createPatientDto } from './dto/create-patient.dto';
import { PatientService } from './patient.service';
import { Patient } from './schemas/patient.schema';

@Controller('patient')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Post()
  create(@Body() createPatient: createPatientDto): Promise<Patient> {
    return this.patientService.create(createPatient);
  }
}
