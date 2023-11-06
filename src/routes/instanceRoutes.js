const express = require('express');
const router = express.Router();
const oapi = require('../../config/openapi');
const {
  instanceGetByServiceEndpoint,
  instanceGetAllEndpoint,
  instanceGetByIdEndpoint,
  instancePostEndpoint,
  instanceDeleteEndpoint,
} = require('../../docs/instanceEndpoints');
const {
  getInstancesByService,
  listInstances,
  getInstanceById,
  addInstance,
  removeInstance,
} = require('../controllers/instanceController');

router.get(
  '/service/:service_id',
  oapi.path(instanceGetByServiceEndpoint),
  getInstancesByService,
);

router.get('/', oapi.path(instanceGetAllEndpoint), listInstances);

router.get(
  '/:instance_id',
  oapi.path(instanceGetByIdEndpoint),
  getInstanceById,
);

router.post('/', oapi.path(instancePostEndpoint), addInstance);

router.delete(
  '/:instance_id',
  oapi.path(instanceDeleteEndpoint),
  removeInstance,
);

module.exports = router;
