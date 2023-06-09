export default {
  NODE_ENV: process.env.NODE_ENV || 'dev',
  NODE_PORT: Number(process.env.NODE_PORT) || 3000,
  MONGO_URL: process.env.MONGO_URL,
  GITHUB_OAUTH_CLIENT_ID: process.env.GITHUB_OAUTH_CLIENT_ID,
  GITHUB_OAUTH_REDIRECT_URI: process.env.GITHUB_OAUTH_REDIRECT_URI,
  GITHUB_OAUTH_CLIENT_SECRET: process.env.GITHUB_OAUTH_CLIENT_SECRET,
};
