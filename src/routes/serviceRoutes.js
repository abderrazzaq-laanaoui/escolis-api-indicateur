const express = require('express');
const router = express.Router();
const oapi = require('../../config/openapi');
const {
  servicePostEndpoint,
  servicePutEndpoint,
  serviceGetByIdEndpoint,
  serviceGetAllEndpoint,
  serviceDeleteEndpoint,
} = require('../../docs/serviceEndpoints');

const serviceController = require('../controllers/serviceController');
const { GET, GET_BY_ID, POST, PUT, DELETE } = serviceController();

router.post('/', oapi.path(servicePostEndpoint), POST);

router.put('/:service_id', oapi.path(servicePutEndpoint), PUT);

router.get('/:service_id', oapi.path(serviceGetByIdEndpoint), GET_BY_ID);

router.get('/', oapi.path(serviceGetAllEndpoint), GET);

router.delete('/:service_id', oapi.path(serviceDeleteEndpoint), DELETE);

module.exports = router;
