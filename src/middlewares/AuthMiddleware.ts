import { HttpService } from '@nestjs/axios';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { lastValueFrom, map } from 'rxjs';

const BearerPrefix = 'Bearer ';
const githubUserUrl = 'https://api.github.com/user';

@Injectable()
export class GithubMiddleware implements NestMiddleware {
  constructor(private readonly httpService: HttpService) {}
  async use(req: Request, res: Response, next: () => void) {
    const { headers } = req;
    const { authorization } = headers;

    if (!authorization || !authorization.startsWith(BearerPrefix))
      return res.send({ statusCode: 401, message: 'Forbidden' });

    try {
      const user = await lastValueFrom(
        await this.httpService
          .get(githubUserUrl, { headers: { Authorization: authorization } })
          .pipe(map((res) => res.data)),
      );

      next();
    } catch (error) {
      return res.send({ statusCode: 401, message: 'Invalid Credentials' });
    }
  }
}
