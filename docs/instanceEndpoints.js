const instanceGetByServiceEndpoint = {
  tags: ['Instances'],
  summary: 'Get instances by service ID',
  description: 'This endpoint retrieves all instances for a given service ID.',
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
      description: 'Instances retrieved successfully',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/InstanceResponse',
            },
          },
        },
      },
    },
    500: {
      description:
        'Server error. The instances could not be retrieved due to a server error.',
    },
  },
};

const instanceGetAllEndpoint = {
  tags: ['Instances'],
  summary: 'Get all instances',
  description: 'This endpoint retrieves all instances.',
  responses: {
    200: {
      description: 'Instances retrieved successfully',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/InstanceResponse',
            },
          },
        },
      },
    },
    500: {
      description:
        'Server error. The instances could not be retrieved due to a server error.',
    },
  },
};

const instanceGetByIdEndpoint = {
  tags: ['Instances'],
  summary: 'Get an instance by ID',
  description: 'This endpoint retrieves an instance by its ID.',
  parameters: [
    {
      in: 'path',
      name: 'instance_id',
      required: true,
      type: 'string',
    },
  ],
  responses: {
    200: {
      description: 'Instance retrieved successfully',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/InstanceResponse',
          },
        },
      },
    },
    404: {
      description: 'Instance not found',
    },
    500: {
      description:
        'Server error. The instance could not be retrieved due to a server error.',
    },
  },
};

const instancePostEndpoint = {
  tags: ['Instances'],
  summary: 'Create a new instance',
  description:
    'This endpoint creates a new instance with the provided information.',
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/InstanceRequest',
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Instance created successfully',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/InstanceResponse',
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
        'Server error. The instance could not be created due to a server error.',
    },
  },
};
const instanceDeleteEndpoint = {
  tags: ['Instances'],
  summary: 'Delete an instance by ID',
  description: 'This endpoint deletes an instance by its ID.',
  parameters: [
    {
      in: 'path',
      name: 'instance_id',
      required: true,
      type: 'string',
    },
  ],
  responses: {
    204: {
      description: 'Instance deleted successfully',
    },
    404: {
      description: 'Instance not found',
    },
    500: {
      description:
        'Server error. The instance could not be deleted due to a server error.',
    },
  },
};

module.exports = {
  instanceGetByServiceEndpoint,
  instanceGetAllEndpoint,
  instanceGetByIdEndpoint,
  instancePostEndpoint,
  instanceDeleteEndpoint,
};
