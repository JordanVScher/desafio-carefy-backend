import { createPatientDto } from '../dto/create-patient.dto';
import { PatientDto } from '../dto/patient.dto';
import { PatientServiceInterface } from '../interfaces/patient.service.interface';
import { Patient } from '../schemas/patient.schema';
import { PatientMock } from './patient.mock';

export class PatientServiceMock implements PatientServiceInterface {
  create(data: createPatientDto): Promise<Patient> {
    return PatientMock as any;
  }

  findOne(id: string): Promise<Patient> {
    return PatientMock as any;
  }
}
