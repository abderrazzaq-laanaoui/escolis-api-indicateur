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
              $ref: '#/components/schemas/ServiceResponse',
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
            $ref: '#/components/schemas/ServiceResponse',
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
const servicePostEndpoint = {
  tags: ['Services'],
  summary: 'Create a new service',
  description:
    'This endpoint creates a new service with the provided information.',
  requestBody: {
    content: {
      'application/json': {
        schema: {
          ref: '#/components/schemas/ServiceRequest',
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
            $ref: '#/components/schemas/ServiceResponse',
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
          ref: '#/components/schemas/ServiceRequest',
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
            $ref: '#/components/schemas/ServiceResponse',
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
    204: {
      description: 'Service deleted successfully',
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
