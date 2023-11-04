const express = require('express');
const router = express.Router();
const instanceController = require('../controllers/instanceController');

// Define routes for instance management
router.post('/', instanceController.addInstance);
router.delete('/:instance_id', instanceController.removeInstance);
router.get('/service/:service_id', instanceController.getInstancesByService);
router.get('/', instanceController.listInstances);

module.exports = router;
