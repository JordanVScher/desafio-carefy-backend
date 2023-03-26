import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class createPatientDto {
  @ApiProperty({ description: 'Patient name' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'Patient email' })
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
