import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UpdatePatientDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}
