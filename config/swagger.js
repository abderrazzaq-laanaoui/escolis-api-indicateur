const path = require('path');
const apiDoc = {
  swagger: '2.0',
    info: {
        title: 'API Indicator',
        version: '1.0.0',
        description: 'API Indicator microservice',
    },
    servers: [
        {
            url: 'http://localhost:3030',
            description: 'Local server',
        },
    ],
    tags: [
        {
            name: 'services',
            description: 'Service management',
        },
        {
            name: 'instances',
            description: 'Instance management',
        },
        {
            name: 'messages',
            description: 'Message management',
        },
        {
            name: 'auth',
            description: 'Authentication',
        },
    ],
    paths: {},

};

exports.default = apiDoc;