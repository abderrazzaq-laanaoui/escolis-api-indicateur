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
});

module.exports = mongoose.model('Instance', instanceSchema);
