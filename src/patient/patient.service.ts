import { Injectable } from '@nestjs/common';
import { createPatientDto } from './dto/create-patient.dto';
import { PatientServiceInterface } from './interfaces/patient.service.interface';

@Injectable()
export class PatientService implements PatientServiceInterface {
  create(createPatient: createPatientDto) {
    return createPatient as any;
  }
}
