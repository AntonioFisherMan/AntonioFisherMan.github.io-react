const config = require('config')
const jwtMiddleware = require('express-jwt-middleware')

const secret = config.get('JWT_SECRET')

exports.jwtCheck = jwtMiddleware(secret)
