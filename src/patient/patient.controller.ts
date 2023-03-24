import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { createPatientDto } from './dto/create-patient.dto';
import { GetPatientsOptionsDto } from './dto/get-patients-options.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { PatientService } from './patient.service';
import { Patient } from './schemas/patient.schema';

@Controller('patient')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Post()
  create(@Body() createPatient: createPatientDto): Promise<Patient> {
    return this.patientService.create(createPatient);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.patientService.findOne(id);
  }

  @Get()
  findMany(@Body() getPatientsOptions: GetPatientsOptionsDto) {
    return this.patientService.findMany(getPatientsOptions);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePatient: UpdatePatientDto) {
    return this.patientService.update(id, updatePatient);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.patientService.remove(id);
  }
}
