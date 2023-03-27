import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class GithubAuth {
  @ApiProperty({ description: 'Oauth Code' })
  @IsNotEmpty()
  code: string;
}
