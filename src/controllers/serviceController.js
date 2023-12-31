const ServiceModel = require('../models/ServiceModel');

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
    const service = await ServiceModel.findByIdAndUpdate(service_id, req.body, {
      new: true,
    });
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

module.exports = { POST, PUT, GET_BY_ID, GET, DELETE };
