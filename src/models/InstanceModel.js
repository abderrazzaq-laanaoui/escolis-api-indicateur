const mongoose = require('mongoose');

const instanceSchema = new mongoose.Schema({
  service: {
    type: mongoose.Schema.Types.ObjectId,
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
  // Define other instance properties here
});

module.exports = mongoose.model('Instance', instanceSchema);
