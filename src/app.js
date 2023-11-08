require('dotenv').config();
const express = require('express');
const oapi = require('../config/openapi');
const mongoose = require('mongoose');
const db_url = require('../config/database').url;

const app = express();
const port = process.env.NODE_DOCKER_PORT || 8080;

// Middleware and body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(oapi);

// database connection
mongoose
  .connect(db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Database connection established');
    require('./seed');
  })
  .catch((err) => {
    console.error(err);
  });

// seed data

// Import route modules
const serviceRoutes = require('./routes/serviceRoutes');
const instanceRoutes = require('./routes/instanceRoutes');
const messageRoutes = require('./routes/messageRoutes');

app.use('/api/v1/services', serviceRoutes);
app.use('/api/v1/instances', instanceRoutes);
app.use('/api/v1/messages', messageRoutes);
app.use('/', oapi.swaggerui);

// Start the server
app.listen(port, () => {
  console.log(`API Indicator microservice is running on port ${port}`);
});
