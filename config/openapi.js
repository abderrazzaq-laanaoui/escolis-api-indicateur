const openapi = require('@wesleytodd/openapi');
const oapi = openapi({
  openapi: '3.0.0',
  info: {
    title: 'Express Application',
    description: 'Generated docs from an Express api',
    version: '1.0.0',
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
  security: {
    // bearerAuth for all endpoints except /api/auth and /api/documentation
    bearerAuth: [
      {
        bearerAuth: [],
      },
    ],
  },
});

module.exports = oapi;
