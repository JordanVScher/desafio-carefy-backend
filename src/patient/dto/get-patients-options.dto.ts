import { IsNotEmpty, Validate } from 'class-validator';
import { PositiveIntegerValidator } from '../../validators/integer.validator';

export class GetPatientsOptionsDto {
  @IsNotEmpty()
  @Validate(PositiveIntegerValidator)
  limit: number;

  @IsNotEmpty()
  @Validate(PositiveIntegerValidator)
  page: number;
}
