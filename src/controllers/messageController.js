const MessageModel = require('../models/MessageModel');

// Send a message to a service
const sendMessage = async (req, res) => {
  const { service_id } = req.params;
  try {
    const message = new MessageModel({
      serviceId: service_id,
      content: req.body.content,
    });
    await message.save();
    // Implement logic to dispatch the message to the destination service and return the result
    res.status(200).json({ message: 'Message sent successfully' }); // 200 OK
  } catch (error) {
    res.status(400).json({ error: 'Invalid data' }); // 400 Bad Request
  }
};

module.exports = {
  sendMessage,
};
