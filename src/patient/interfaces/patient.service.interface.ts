import { createPatientDto } from '../dto/create-patient.dto';
import { UpdatePatientDto } from '../dto/update-patient.dto';
import { Patient, PatientDocument } from '../schemas/patient.schema';

export interface PatientServiceInterface {
  create(data: createPatientDto): Promise<Patient>;
  findOne(id: string): Promise<PatientDocument>;
  update(did: string, newData: UpdatePatientDto): Promise<PatientDocument>;
  remove(id: string): Promise<PatientDocument>;
}
