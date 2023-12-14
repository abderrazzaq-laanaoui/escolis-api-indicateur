const jwt = require('express-jwt');
const jwks = require('jwks-rsa');

const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksUri: process.env.NODE_JWKS_URI,
  }),
  audience: process.env.NODE_JWKS_AUDIENCE,
  issuer: process.env.NODE_JWKS_ISSUER,
  algorithms: [process.env.NODE_JWKS_ALGORITHMS],
});

module.exports = jwtCheck;
