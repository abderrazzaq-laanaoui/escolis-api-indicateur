const servicePostEndpoint = {
  tags: ['Services'],
  summary: 'Create a new service',
  description:
    'This endpoint creates a new service with the provided information.',
  requestBody: {
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            name: { type: 'string', description: 'The name of the service.' },
            description: {
              type: 'string',
              description: 'A brief description of the service.',
            },
            // Add other properties here
          },
          required: ['name'],
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Service created successfully',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                description: 'The ID of the created service.',
              },
              name: { type: 'string', description: 'The name of the service.' },
              description: {
                type: 'string',
                description: 'A brief description of the service.',
              },
              // Add other properties here
            },
          },
        },
      },
    },
    400: {
      description:
        'Bad request. The request body is missing or contains invalid data.',
    },
    500: {
      description:
        'Server error. The service could not be created due to a server error.',
    },
  },
};

const servicePutEndpoint = {
  tags: ['Services'],
  summary: 'Update a service by ID',
  description: 'This endpoint updates a service with the provided information.',
  parameters: [
    {
      in: 'path',
      name: 'service_id',
      required: true,
      type: 'string',
    },
  ],
  requestBody: {
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            name: { type: 'string', description: 'The name of the service.' },
            description: {
              type: 'string',
              description: 'A brief description of the service.',
            },
            // Add other properties here
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Service updated successfully',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                description: 'The ID of the updated service.',
              },
              name: { type: 'string', description: 'The name of the service.' },
              description: {
                type: 'string',
                description: 'A brief description of the service.',
              },
              // Add other properties here
            },
          },
        },
      },
    },
    400: {
      description:
        'Bad request. The request body is missing or contains invalid data.',
    },
    404: {
      description: 'Service not found',
    },
    500: {
      description:
        'Server error. The service could not be updated due to a server error.',
    },
  },
};
const serviceGetByIdEndpoint = {
  tags: ['Services'],
  summary: 'Get a service by ID',
  description: 'This endpoint retrieves a service by its ID.',
  parameters: [
    {
      in: 'path',
      name: 'service_id',
      required: true,
      type: 'string',
    },
  ],
  responses: {
    200: {
      description: 'Service retrieved successfully',
      content: {
        'application/json': {
          schema: {
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
        },
      },
    },
    404: {
      description: 'Service not found',
    },
    500: {
      description:
        'Server error. The service could not be retrieved due to a server error.',
    },
  },
};

const serviceGetAllEndpoint = {
  tags: ['Services'],
  summary: 'Get all services',
  description: 'This endpoint retrieves all services.',
  responses: {
    200: {
      description: 'Services retrieved successfully',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              $ref: '#/definitions/Service',
            },
          },
        },
      },
    },
    500: {
      description:
        'Server error. The services could not be retrieved due to a server error.',
    },
  },
};

const serviceDeleteEndpoint = {
  tags: ['Services'],
  summary: 'Delete a service by ID',
  description: 'This endpoint deletes a service by its ID.',
  parameters: [
    {
      in: 'path',
      name: 'service_id',
      required: true,
      type: 'string',
    },
  ],
  responses: {
    200: {
      description: 'Service deleted successfully',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                description: 'The ID of the deleted service.',
              },
              name: { type: 'string', description: 'The name of the service.' },
              description: {
                type: 'string',
                description: 'A brief description of the service.',
              },
              // Add other properties here
            },
          },
        },
      },
    },
    404: {
      description: 'Service not found',
    },
    500: {
      description:
        'Server error. The service could not be deleted due to a server error.',
    },
  },
};

module.exports = {
  servicePostEndpoint,
  servicePutEndpoint,
  serviceGetByIdEndpoint,
  serviceGetAllEndpoint,
  serviceDeleteEndpoint,
};
