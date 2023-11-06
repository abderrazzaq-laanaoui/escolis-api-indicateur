const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  serviceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service',
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  method: {
    type: String,
    required: true,
  },

  query: {
    type: Object,
  },
  body: {
    type: Object,
  },
});

module.exports = mongoose.model('Message', messageSchema);
