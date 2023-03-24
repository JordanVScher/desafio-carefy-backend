import { createPatientDto } from '../dto/create-patient.dto';
import { PatientDto } from '../dto/patient.dto';
import { PatientServiceInterface } from '../interfaces/patient.service.interface';
import { PatientMock } from './patient.mock';

export class PatientServiceMock implements PatientServiceInterface {
  create(data: createPatientDto): PatientDto {
    return PatientMock;
  }
}
