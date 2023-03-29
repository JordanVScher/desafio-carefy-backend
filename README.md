## Carefy Desafio Backend

## Fill in env configuration

NODE_ENV='dev'
NODE_PORT=3500
MONGO_URL=<YOUR_MONGO_URL>
GITHUB_OAUTH_CLIENT_ID=<GET_THIS_FROM_YOUR_GITHUB_OAUTH_APP>
GITHUB_OAUTH_REDIRECT_URI=<GET_THIS_FROM_YOUR_GITHUB_OAUTH_APP>
GITHUB_OAUTH_CLIENT_SECRET=<GET_THIS_FROM_YOUR_GITHUB_OAUTH_APP>

## How this works

`/patient `endpoints are protected.
It's necessary to send Github's access token via Bearer <Token> in the Authorization header.
This token will be validated on github's api.

## Swagger

Endpoints details can be seen on `/api`

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```