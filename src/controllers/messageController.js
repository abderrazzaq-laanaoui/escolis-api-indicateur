require('dotenv').config();
const axios = require('axios');
const InstanceModel = require('../models/InstanceModel');
const Redis = require('ioredis');
const redis_host = process.env.REDIS_HOST;
const redis_port = process.env.REDIS_PORT;
const redis_password = process.env.REDIS_PASSWORD;
const redis = new Redis(
  `redis://:${redis_password}@${redis_host}:${redis_port}/0`,
);

const sendMessage = async (req, res) => {
  const { service_id } = req.params;
  const { path, method, body } = req.body;

  try {
    const instances = await InstanceModel.find({
      serviceResourceId: service_id,
    }).lean();

    if (instances.length === 0) {
      return res.status(404).json({ error: 'Service not found' });
    }

    // Get the last used instance index from Redis
    let instanceIndex = await redis.get(
      `service:${service_id}:lastUsedInstanceIndex`,
    );
    instanceIndex = instanceIndex === null ? 0 : Number(instanceIndex);

    // Use modulo to ensure the index is always within the array bounds
    const instance = instances[instanceIndex % instances.length];

    // Increment the index for the next request and store it in Redis
    await redis.set(
      `service:${service_id}:lastUsedInstanceIndex`,
      (instanceIndex + 1) % instances.length,
    );

    // Construct the URL for the service instance
    const url = `http://${instance.hostname}:${instance.port}${path}`;

    // Send the request to the service instance
    const response = await axios({
      method,
      url,
      headers: req.headers,
      data: body,
    });

    // Send the response back to the client
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: 'An error occurred while sending the message' });
  }
};

module.exports = {
  sendMessage,
};
