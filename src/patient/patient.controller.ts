import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { createPatientDto } from './dto/create-patient.dto';
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

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.patientService.remove(id);
  }
}
