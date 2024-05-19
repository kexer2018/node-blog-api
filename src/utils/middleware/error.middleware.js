const { validationResult } = require('express-validator')
const responseHandler = require('../response-handler')

function handleValidationErrors(req, res, next) {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    responseHandler.error(res, errors.array()[0].msg)
    return 
  }
  next()
}

module.exports = handleValidationErrors
