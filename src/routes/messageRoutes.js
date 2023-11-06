const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

// Define route to send a message to a service
router.post('/service/:service_id', messageController.sendMessage);

module.exports = router;
