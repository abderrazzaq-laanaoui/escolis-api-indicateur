const InstanceModel = require('../models/InstanceModel');

// Add a new service instance
const addInstance = async (req, res) => {
  try {
    const instance = new InstanceModel(req.body);
    await instance.save();
    res.status(201).json(instance); // 201 Created
  } catch (error) {
    res.status(400).json({ error: 'Invalid data' }); // 400 Bad Request
  }
};

// Remove a service instance by ID
const removeInstance = async (req, res) => {
  const { instance_id } = req.params;
  try {
    const instance = await InstanceModel.findByIdAndRemove(instance_id);
    if (!instance) {
      return res.status(404).json({ error: 'Instance not found' }); // 404 Not Found
    }
    res.status(204).end(); // 204 No Content
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' }); // 500 Internal Server Error
  }
};

// Retrieve instances by service ID
const getInstancesByService = async (req, res) => {
  const { service_id } = req.params;
  try {
    const instances = await InstanceModel.find({ service: service_id });
    res.status(200).json(instances); // 200 OK
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' }); // 500 Internal Server Error
  }
};

// List all available instances
const listInstances = async (req, res) => {
  try {
    const instances = await InstanceModel.find();
    res.status(200).json(instances); // 200 OK
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' }); // 500 Internal Server Error
  }
};

module.exports = {
  addInstance,
  removeInstance,
  getInstancesByService,
  listInstances,
};
