import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { createPatientDto } from './dto/create-patient.dto';
import { PatientServiceInterface } from './interfaces/patient.service.interface';
import { Patient, PatientDocument } from './schemas/patient.schema';

@Injectable()
export class PatientService implements PatientServiceInterface {
  constructor(
    @InjectModel(Patient.name) private patientModel: Model<PatientDocument>,
  ) {}

  create(createPatient: createPatientDto): Promise<Patient> {
    const createdPatient = new this.patientModel(createPatient);
    return createdPatient.save();
  }
}
