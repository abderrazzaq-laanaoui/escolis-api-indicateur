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
            },
            body: {
              type: 'object',
              description:
                'The body of the request to send to the service instance',
            },
          },
          required: ['path', 'method'],
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
