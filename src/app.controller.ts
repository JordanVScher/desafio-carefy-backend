import { Controller, Get, Query, Res } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('app')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({ summary: 'Initial Page' })
  @ApiResponse({ status: 200 })
  @Get('/')
  Redirect(@Res() res) {
    return res.redirect('/api');
  }

  @ApiOperation({ summary: 'Health check' })
  @ApiResponse({ status: 200, description: 'ok' })
  @Get('/healthcheck')
  Healthcheck(): string {
    return 'ok';
  }
}
