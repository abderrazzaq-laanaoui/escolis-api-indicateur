const express = require('express');
const router = express.Router();
const oapi = require('../../config/openapi');
const messageController = require('../controllers/messageController');
const { sendMessageEndpoint } = require('../../docs/messageEndpoints');

router.post(
  '/service/:service_id',
  oapi.path(sendMessageEndpoint),
  messageController.sendMessage,
);

module.exports = router;
