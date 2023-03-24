export default {
  NODE_ENV: process.env.NODE_ENV || 'dev',
  NODE_PORT: Number(process.env.NODE_PORT) || 3000,
  MONGO_URL: process.env.MONGO_URL,
};