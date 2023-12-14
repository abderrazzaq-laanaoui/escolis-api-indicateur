const { rateLimit } = require('express-rate-limit');

const rateLimitMiddleware = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  limit: 100, // Limit each IP to 100 requests per `window` (here, per 5 minutes).
  standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
  statusCode: 429, // 429 status = Too Many Requests (RFC 6585)
  message:
    'Vous avez dépassé le nombre de requêtes autorisées. Veuillez réessayer ultérieurement.',

  // store: ... , // Use an external store for consistency across multiple server instances.
});

module.exports = rateLimitMiddleware;
