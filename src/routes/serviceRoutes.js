const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

// Define routes for service management
const { GET, GET_BY_ID, POST, PUT, DELETE } = serviceController();
router.post('/', POST);
router.put('/:service_id', PUT);
router.get('/:service_id', GET_BY_ID);
router.get('/', GET);
router.delete('/:service_id', DELETE);

module.exports = router;
