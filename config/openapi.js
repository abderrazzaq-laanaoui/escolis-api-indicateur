const openapi = require('@wesleytodd/openapi');
const oapi = openapi({
  openapi: '3.0.0',
  info: {
    title: 'E-SCOLIS API Indicator',
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
    schemas: {
      ServiceRequest: {
        type: 'object',
        properties: {
          serviceSourceId: {
            type: 'string',
            description: 'The ID of the retrieved service.',
          },
          name: {
            type: 'string',
            description: 'The name of the service.',
          },
          description: {
            type: 'string',
            description: 'A brief description of the service.',
          },
        },
      },
      ServiceResponse: {
        type: 'object',
        properties: {
          _id: {
            type: 'string',
            description: 'The ID of the retrieved service.',
          },
          name: {
            type: 'string',
            description: 'The name of the service.',
          },
          description: {
            type: 'string',
            description: 'A brief description of the service.',
          },
          serviceResourceId: {
            type: 'string',
            description: 'The ID of the service resource.',
          },
          instances: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/InstanceResponse',
            },
          },
        },
      },
      InstanceRequest: {
        type: 'object',
        properties: {
          serviceResourceId: {
            type: 'string',
            description: 'The ID of the retrieved service.',
          },
          hostname: {
            type: 'string',
            description: 'The hostname of the service instance.',
          },
          port: {
            type: 'number',
            description: 'The port of the service instance.',
          },
          status: {
            type: 'string',
            description: 'The status of the service instance.',
          },
        },
      },
      InstanceResponse: {
        type: 'object',
        properties: {
          _id: {
            type: 'string',
            description: 'The ID of the retrieved instance.',
          },
          serviceResourceId: {
            type: 'string',
            description: 'The ID of the service resource.',
          },
          hostname: {
            type: 'string',
            description: 'The hostname of the service instance.',
          },
          port: {
            type: 'number',
            description: 'The port of the service instance.',
          },
        },
      },
      MessageRequest: {
        type: 'object',
        properties: {
          path: {
            type: 'string',
            description:
              'The path of the request to send to the service instance',
          },
          method: {
            type: 'string',
            description:
              'The HTTP method of the request to send to the service instance',
            enum: [
              'GET',
              'POST',
              'PUT',
              'DELETE',
              'PATCH',
              'HEAD',
              'OPTIONS',
              'CONNECT',
              'TRACE',
            ],
          },
          query: {
            type: 'object',
            description:
              'The query parameters of the request to send to the service instance',
          },
          body: {
            type: 'object',
            description:
              'The body of the request to send to the service instance',
          },
        },
        required: ['path', 'method'],
      },
      MessageResponse: {
        type: 'object',
        properties: {
          _id: {
            type: 'string',
            description: 'The ID of the message.',
          },
          serviceId: {
            type: 'string',
            description: 'The ID of the service.',
          },
          path: {
            type: 'string',
            description: 'The path of the request.',
          },
          method: {
            type: 'string',
            description: 'The HTTP method of the request.',
          },
          query: {
            type: 'object',
            description: 'The query parameters of the request.',
          },
          body: {
            type: 'object',
            description: 'The body of the request.',
          },
        },
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
