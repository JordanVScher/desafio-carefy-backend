import { Controller, Post } from '@nestjs/common';

import { PatientService } from './patient.service';

@Controller('patient')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Post()
  create(data) {
    return this.patientService.create(data);
  }
}
