import { createPatientDto } from '../dto/create-patient.dto';
import { PatientDto } from '../dto/patient.dto';

export interface PatientServiceInterface {
  create(data: createPatientDto): PatientDto;
}
