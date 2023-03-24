import { IsNotEmpty, IsNumber } from 'class-validator';

export class GetPatientsOptionsDto {
  @IsNumber()
  @IsNotEmpty()
  limit: number;

  @IsNumber()
  @IsNotEmpty()
  page: number;
}
