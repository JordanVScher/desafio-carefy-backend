import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UpdatePatientDto {
  @ApiProperty({ description: 'Patient name' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'Patient name' })
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
