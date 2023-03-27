import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { GithubAuth } from './dto/github-auth.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('/getAccessToken')
  @ApiOperation({ summary: 'Get Access Token from Github OAuth' })
  @ApiResponse({ status: 200, description: 'ok' })
  getAccessToken(@Query() query: GithubAuth): Promise<any> {
    return this.authService.getAccessToken(query.code);
  }
}
