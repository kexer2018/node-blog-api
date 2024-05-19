// src/middlewares/verifyToken.js
const jwt = require('jsonwebtoken')
const responseHandler = require('../response-handler')
const dotenv = require('dotenv')

dotenv.config({ path: '.env' })

const verifyToken = async (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1]
  if (!token) {
    return responseHandler.error(res, 'Invalid token', 'Token not found', 404)
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded
    next()
  } catch (error) {
    return responseHandler.error(res, error, 'Invalid token', 404)
  }
}

module.exports = verifyToken
