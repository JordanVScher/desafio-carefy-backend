import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'PositiveInteger', async: false })
export class PositiveIntegerValidator implements ValidatorConstraintInterface {
  validate(n: number) {
    if (!Number.isInteger(n)) return false;
    if (n <= 0) return false;
    return true;
  }

  defaultMessage({ property }) {
    return `${property} must be positive integer`;
  }
}
