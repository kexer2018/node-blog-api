const crypto = require('node:crypto')
const responseHandler = require('../utils/response-handler')

function register(req, res) {
  const { username, password, email } = req.body
}

module.exports = {
  register,
}
