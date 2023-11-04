const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/api-indicator', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
