import { Model } from 'mongoose';
import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { createPatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { PatientServiceInterface } from './interfaces/patient.service.interface';
import { Patient, PatientDocument } from './schemas/patient.schema';
import { GetPatientsOptionsDto } from './dto/get-patients-options.dto';

@Injectable()
export class PatientService implements PatientServiceInterface {
  constructor(
    @InjectModel(Patient.name) private patientModel: Model<PatientDocument>,
  ) {}

  async create(createPatient: createPatientDto): Promise<PatientDocument> {
    const createdPatient = new this.patientModel(createPatient);
    return createdPatient.save();
  }

  async findOne(id: string): Promise<PatientDocument> {
    const patientFound = await this.patientModel.findById(id);
    if (!patientFound) throw new HttpException('Patient not found', 404);
    return patientFound;
  }

  async findMany(options: GetPatientsOptionsDto): Promise<PatientDocument[]> {
    const { limit, page } = options;
    const skip = (page - 1) * limit;
    return this.patientModel.find({}).limit(limit).skip(skip);
  }

  async update(
    id: string,
    updatePatient: UpdatePatientDto,
  ): Promise<PatientDocument> {
    const patientFound = await this.findOne(id);
    if (updatePatient.name) patientFound.name = updatePatient.name;
    if (updatePatient.email) patientFound.email = updatePatient.email;
    return patientFound.save();
  }

  async remove(id: string): Promise<PatientDocument> {
    const patientFound = await this.findOne(id);
    await this.patientModel.findOneAndDelete(patientFound._id);
    return patientFound;
  }
}
