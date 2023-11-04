const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Define route for user authentication
router.post('/login', authController.authenticateUser);

module.exports = router;
