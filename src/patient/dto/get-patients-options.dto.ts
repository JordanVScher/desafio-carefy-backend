import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Validate } from 'class-validator';
import { PositiveIntegerValidator } from '../../validators/integer.validator';

export class GetPatientsOptionsDto {
  @ApiProperty({ description: 'Limit of elements per page' })
  @IsNotEmpty()
  @Validate(PositiveIntegerValidator)
  limit: number;

  @ApiProperty({ description: 'Result Page' })
  @IsNotEmpty()
  @Validate(PositiveIntegerValidator)
  page: number;
}
