const openapi = require('@wesleytodd/openapi');
const oapi = openapi({
  openapi: '3.0.0',
  info: {
    title: 'Express Application',
    description:
      'This is the API documentation for the API Indicator microservice.',
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
    // define
  },
  definitions: {
    Service: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
          description: 'The ID of the retrieved service.',
        },
        name: { type: 'string', description: 'The name of the service.' },
        description: {
          type: 'string',
          description: 'A brief description of the service.',
        },
        // Add other properties here
      },
    },
    Instance: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
          description: 'The ID of the retrieved instance.',
        },
        name: { type: 'string', description: 'The name of the instance.' },
        description: {
          type: 'string',
          description: 'A brief description of the instance.',
        },
        // Add other properties here
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
