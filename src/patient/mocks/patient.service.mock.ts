import { createPatientDto } from '../dto/create-patient.dto';
import { GetPatientsOptionsDto } from '../dto/get-patients-options.dto';
import { UpdatePatientDto } from '../dto/update-patient.dto';
import { PatientServiceInterface } from '../interfaces/patient.service.interface';
import { Patient, PatientDocument } from '../schemas/patient.schema';
import { PatientMock } from './patient.mock';

export class PatientServiceMock implements PatientServiceInterface {
  create(data: createPatientDto): Promise<Patient> {
    return PatientMock as any;
  }

  findOne(id: string): Promise<PatientDocument> {
    return PatientMock as any;
  }

  findMany(options: GetPatientsOptionsDto): Promise<PatientDocument[]> {
    return [PatientMock] as any;
  }

  update(id: string, newData: UpdatePatientDto): Promise<PatientDocument> {
    return PatientMock as any;
  }

  remove(id: string): Promise<PatientDocument> {
    return PatientMock as any;
  }
}
