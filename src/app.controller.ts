import { Controller, Get, Res } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AppService } from './app.service';

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
