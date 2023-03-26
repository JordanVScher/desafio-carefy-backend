import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { createPatientDto } from './dto/create-patient.dto';
import { GetPatientsOptionsDto } from './dto/get-patients-options.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { PatientService } from './patient.service';
import { Patient } from './schemas/patient.schema';

@ApiTags('patient')
@Controller('patient')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Post()
  @ApiOperation({ summary: 'Create new Patient' })
  @ApiResponse({
    status: 200,
    description: 'New Patient Document',
    type: Patient,
  })
  create(@Body() createPatient: createPatientDto): Promise<Patient> {
    return this.patientService.create(createPatient);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find one Patient by Id' })
  @ApiResponse({
    status: 200,
    description: 'Found Patient Document',
    type: Patient,
  })
  findOne(@Param('id') id: string): Promise<Patient> {
    return this.patientService.findOne(id);
  }

  @Get()
  @ApiOperation({ summary: 'Find many Patients' })
  @ApiResponse({
    status: 200,
    description: 'FoundPatients Documents',
    isArray: true,
    type: Patient,
  })
  findMany(
    @Query() getPatientsOptions: GetPatientsOptionsDto,
  ): Promise<Patient[]> {
    return this.patientService.findMany(getPatientsOptions);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update one Patient' })
  @ApiResponse({
    status: 200,
    description: 'Updated Patient Document',
    type: Patient,
  })
  update(
    @Param('id') id: string,
    @Body() updatePatient: UpdatePatientDto,
  ): Promise<Patient> {
    return this.patientService.update(id, updatePatient);
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'Deleted Patient Document',
    type: Patient,
  })
  @ApiOperation({ summary: 'Delete one Patient' })
  remove(@Param('id') id: string): Promise<Patient> {
    return this.patientService.remove(id);
  }
}
