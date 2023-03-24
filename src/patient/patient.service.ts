import { Model } from 'mongoose';
import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { createPatientDto } from './dto/create-patient.dto';
import { PatientServiceInterface } from './interfaces/patient.service.interface';
import { Patient, PatientDocument } from './schemas/patient.schema';

@Injectable()
export class PatientService implements PatientServiceInterface {
  constructor(
    @InjectModel(Patient.name) private patientModel: Model<PatientDocument>,
  ) {}

  async create(createPatient: createPatientDto): Promise<Patient> {
    const createdPatient = new this.patientModel(createPatient);
    return createdPatient.save();
  }

  async findOne(id: string): Promise<Patient> {
    const patientFound = await this.patientModel.findById(id);
    if (!patientFound) throw new HttpException('Patient not found', 404);
    return patientFound;
  }
}
