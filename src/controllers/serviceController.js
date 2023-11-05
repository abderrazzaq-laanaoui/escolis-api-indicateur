const ServiceModel = require('../models/ServiceModel');

module.exports = function () {
  // Create a new service
  const POST = async (req, res) => {
    try {
      const service = new ServiceModel(req.body);
      await service.save();
      res.status(201).json(service); // 201 Created
    } catch (error) {
      res.status(400).json({ error: 'Invalid data' }); // 400 Bad Request
    }
  };

  // Update a service by ID
  const PUT = async (req, res) => {
    const { service_id } = req.params;
    try {
      const service = await ServiceModel.findByIdAndUpdate(
        service_id,
        req.body,
        { new: true },
      );
      if (!service) {
        return res.status(404).json({ error: 'Service not found' }); // 404 Not Found
      }
      res.status(200).json(service); // 200 OK
    } catch (error) {
      res.status(400).json({ error: 'Invalid data' }); // 400 Bad Request
    }
  };

  // Get a service by ID
  const GET_BY_ID = async (req, res) => {
    const { service_id } = req.params;
    try {
      const service = await ServiceModel.findById(service_id);
      if (!service) {
        return res.status(404).json({ error: 'Service not found' }); // 404 Not Found
      }
      res.status(200).json(service); // 200 OK
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' }); // 500 Internal Server Error
    }
  };

  // List all available services
  const GET = async (req, res) => {
    try {
      const services = await ServiceModel.find();
      res.status(200).json(services); // 200 OK
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' }); // 500 Internal Server Error
    }
  };

  // Delete a service by ID
  const DELETE = async (req, res) => {
    const { service_id } = req.params;
    try {
      const service = await ServiceModel.findByIdAndRemove(service_id);
      if (!service) {
        return res.status(404).json({ error: 'Service not found' }); // 404 Not Found
      }
      res.status(204).end(); // 204 No Content
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' }); // 500 Internal Server Error
    }
  };

  GET.apiDoc = {
    summary: 'Get all services',
    operationId: 'getServices',
    tags: ['services'],
    responses: {
      200: {
        description: 'List of services',
        schema: {
          type: 'array',
          items: {
            $ref: '#/definitions/Service',
          },
        },
      },
      500: {
        description: 'Internal Server Error',
      },
    },
  };

  GET_BY_ID.apiDoc = {
    summary: 'Get a service by ID',
    operationId: 'getServiceById',
    tags: ['services'],
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
        description: 'Service',
        schema: {
          $ref: '#/definitions/Service',
        },
      },
      404: {
        description: 'Service not found',
      },
      500: {
        description: 'Internal Server Error',
      },
    },
  };

  POST.apiDoc = {
    summary: 'Create a new service',
    operationId: 'createService',
    tags: ['services'],
    parameters: [
      {
        in: 'body',
        name: 'body',
        required: true,
        schema: {
          $ref: '#/definitions/Service',
        },
      },
    ],
    responses: {
      201: {
        description: 'Service created',
        schema: {
          $ref: '#/definitions/Service',
        },
      },
      400: {
        description: 'Invalid data',
      },
    },
  };

  PUT.apiDoc = {
    summary: 'Update a service by ID',
    operationId: 'updateService',
    tags: ['services'],
    parameters: [
      {
        in: 'path',
        name: 'service_id',
        required: true,
        type: 'string',
      },
      {
        in: 'body',
        name: 'body',
        required: true,
        schema: {
          $ref: '#/definitions/Service',
        },
      },
    ],
    responses: {
      200: {
        description: 'Service updated',
        schema: {
          $ref: '#/definitions/Service',
        },
      },
      400: {
        description: 'Invalid data',
      },
      404: {
        description: 'Service not found',
      },
    },
  };

  DELETE.apiDoc = {
    summary: 'Delete a service by ID',
    operationId: 'deleteService',
    tags: ['services'],
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
        description: 'Service deleted',
      },
      404: {
        description: 'Service not found',
      },
      500: {
        description: 'Internal Server Error',
      },
    },
  };
  return {
    GET,
    GET_BY_ID,
    POST,
    PUT,
    DELETE,
  };
};
