import { createPatientDto } from '../dto/create-patient.dto';
import { Patient } from '../schemas/patient.schema';

export interface PatientServiceInterface {
  create(data: createPatientDto): Promise<Patient>;
}
