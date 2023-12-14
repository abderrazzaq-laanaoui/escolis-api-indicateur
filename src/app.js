require('dotenv').config();
const express = require('express');
const oapi = require('../config/openapi');
const mongoose = require('mongoose');
const db_url = require('../config/database').url;
const rateLimitMiddleware = require('./middlewares/limiter');
const sanitizerMiddleware = require('./middlewares/sanitizer.js');
const cors = require('cors');
const fs = require('fs');
const https = require('https');
const http = require('http');

const app = express();
const port = process.env.NODE_PORT || 3000;

// nom de domaine : api-indicator.esclois.lan
app.use(cors({ origin: 'https://api-indicator.esclois.lan' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(rateLimitMiddleware);
app.use(sanitizerMiddleware);
app.use(oapi);

// seed data
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

// Import route modules
const serviceRoutes = require('./routes/serviceRoutes');
const instanceRoutes = require('./routes/instanceRoutes');
const messageRoutes = require('./routes/messageRoutes');

app.use('/api/v1/services', serviceRoutes);
app.use('/api/v1/instances', instanceRoutes);
app.use('/api/v1/messages', messageRoutes);
app.use('/', oapi.swaggerui);

const httpServer = http.createServer(app);
httpServer.listen(port, () => {
  console.log('HTTP Server running on port 80');
});

if (process.env.NODE_ENV === 'production') {
  const httpsServer = https.createServer(
    {
      cert: fs.readFileSync('/etc/ssl/certs/api-indicator.cert'),
      key: fs.readFileSync('/etc/ssl/cles/api-indicator.key'),
    },
    app,
  );

  // Start the server
  httpsServer.listen(443, () => {
    console.log(`API Indicator microservice is running on port ${port}`);
  });
}
app.on('error', () => {
  global.rateLimitRedis.disconnect();
});
