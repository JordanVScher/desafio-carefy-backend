import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class createPatientDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}
