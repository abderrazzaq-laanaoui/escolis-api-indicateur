const sendMessageEndpoint = {
  tags: ['Messages'],
  summary: 'Send a message to a service',
  description:
    'This endpoint sends a message to a service identified by the service ID.',
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
          $ref: '#/components/schemas/MessageRequest',
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Message sent successfully',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            description: 'The response from the service instance',
          },
        },
      },
    },
    404: {
      description: 'Service not found',
    },
    500: {
      description:
        'Server error. The message could not be sent due to a server error.',
    },
  },
};

module.exports = {
  sendMessageEndpoint,
};
