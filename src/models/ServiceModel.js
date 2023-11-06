const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  serviceSourceId: {
    type: String,
    required: true,
    unique: true,
  },
  instances: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Instance',
    },
  ],
});

module.exports = mongoose.model('Service', serviceSchema);
