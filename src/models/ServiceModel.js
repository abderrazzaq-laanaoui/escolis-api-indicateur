const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  // Define other service properties here
});

module.exports = mongoose.model('Service', serviceSchema);
