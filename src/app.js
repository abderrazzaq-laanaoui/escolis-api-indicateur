const express = require('express');
const app = express();
const port = process.env.PORT || 3030;
////////////////////////////////////////
// const swaggerDocument = require('../config/swagger.json');
const openapi = require('@wesleytodd/openapi')

const oapi = openapi({
  openapi: '3.0.0',
  info: {
    title: 'Express Application',
    description: 'Generated docs from an Express api',
    version: '1.0.0',
  },
  components: {
    securitySchemes : {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT'
      }
    }
  },
  security : {
    // bearerAuth for all endpoints except /api/auth and /api/documentation
    bearerAuth: [
      {
        bearerAuth: []
      }
    ]

  }


})


// Middleware and body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(oapi)
app.use('/api-docs', oapi.swaggerui)
app.use('/api-docs-redoc', oapi.redoc)

// Import route modules
const serviceRoutes = require('./routes/serviceRoutes');
const instanceRoutes = require('./routes/instanceRoutes');
const messageRoutes = require('./routes/messageRoutes');
const authRoutes = require('./routes/authRoutes');

app.get(
  '/',
  oapi.path({
    tags: [],
    summary: 'Get Hello',
    description: 'Test Endpoint that returns the greeting object',
    security: [],
    responses: {
      200: {
        description: 'Successful',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                hello: { type: 'string' },
              },
            },
          },
        },
      },
      401 : {
        description: 'Unauthorized',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                error: { type: 'string' },
              },
            },
          },
        },
      },
      
    },
  }),
  (req, res) => {
    res.json({
      hello: 'world',
    })
  }
)
app.use('/api/services', serviceRoutes);
app.use('/api/instances', instanceRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/auth', authRoutes);

// Start the server
app.listen(port, () => {
  console.log(`API Indicator microservice is running on port ${port}`);
});
