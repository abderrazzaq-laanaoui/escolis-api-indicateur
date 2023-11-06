const mongoose = require('mongoose');

const instanceSchema = new mongoose.Schema({
  serviceResourceId: {
    type: String,
    ref: 'Service',
    required: true,
  },
  hostname: {
    type: String,
    required: true,
  },
  port: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['UP', 'DOWN'],
    default: 'UP',
  },
});

module.exports = mongoose.model('Instance', instanceSchema);
