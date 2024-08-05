export default {
  logLevel: process.env.LOG_LEVEL || 'debug',
  corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  port: parseInt(process.env.PORT || '3333', 10),
  authUser: process.env.AUTH_USERNAME,
  authPassword: process.env.AUTH_PASSWORD,
  nodeEnv: process.env.NODE_ENV || 'development'
}
