const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  serviceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service',
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  // Define other message properties here
});

module.exports = mongoose.model('Message', messageSchema);
