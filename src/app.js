require('dotenv').config();
const express = require('express');
const oapi = require('../config/openapi');

const app = express();
const port = process.env.NODE_DOCKER_PORT || 8080;

// Middleware and body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(oapi);
app.use('/', oapi.swaggerui);

// Import route modules
const serviceRoutes = require('./routes/serviceRoutes');
const instanceRoutes = require('./routes/instanceRoutes');
const messageRoutes = require('./routes/messageRoutes');

app.use('/api/services', serviceRoutes);
app.use('/api/instances', instanceRoutes);
app.use('/api/messages', messageRoutes);

// Start the server
app.listen(port, () => {
  console.log(`API Indicator microservice is running on port ${port}`);
});
