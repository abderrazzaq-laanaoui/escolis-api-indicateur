const { body, param } = require('express-validator');

const sanitizerMiddleware = [
  body('*').escape().trim(),
  param('*').escape().trim(),
];

module.exports = sanitizerMiddleware;
