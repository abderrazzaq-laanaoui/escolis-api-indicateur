const express = require('express');
const router = express.Router();
const {
  GET,
  GET_BY_ID,
  POST,
  PUT,
  DELETE,
} = require('../controllers/serviceController');
const oapi = require('../../config/openapi');
const {
  servicePostEndpoint,
  servicePutEndpoint,
  serviceGetByIdEndpoint,
  serviceGetAllEndpoint,
  serviceDeleteEndpoint,
} = require('../../docs/serviceEndpoints');
router.get('/test', (req, res) => {
  res.send('Service route test');
});
router.get('/:service_id', oapi.path(serviceGetByIdEndpoint), GET_BY_ID);
router.get('/', oapi.path(serviceGetAllEndpoint), GET);
router.post('/', oapi.path(servicePostEndpoint), POST);
router.put('/:service_id', oapi.path(servicePutEndpoint), PUT);
router.delete('/:service_id', oapi.path(serviceDeleteEndpoint), DELETE);

module.exports = router;
