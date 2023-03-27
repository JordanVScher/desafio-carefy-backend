import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { lastValueFrom } from 'rxjs';

import env from '../config/env';

const { GITHUB_OAUTH_CLIENT_ID, GITHUB_OAUTH_CLIENT_SECRET } = env;
const githubAuthUrl = 'https://github.com/login/oauth/access_token';

const headers = {
  Accept: 'application/json',
};

@Injectable()
export class AuthService {
  constructor(private readonly httpService: HttpService) {}

  async getAccessToken(code: string): Promise<any> {
    const params = {
      client_id: GITHUB_OAUTH_CLIENT_ID,
      client_secret: GITHUB_OAUTH_CLIENT_SECRET,
      code,
    };

    return lastValueFrom(
      await this.httpService
        .post(githubAuthUrl, { headers }, { params })
        .pipe(map((res) => res.data)),
    );
  }
}
