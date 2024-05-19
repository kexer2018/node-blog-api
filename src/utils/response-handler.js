// utils/responseHandler.js
const responseHandler = {
  success: (
    res,
    data,
    message = 'success',
    statusCode = 200
  ) => {
    res.status(statusCode).json({
      success: true,
      message,
      data,
    })
  },

  error: (res, error, message = 'error', statusCode = 500) => {
    res.status(statusCode).json({
      success: false,
      message,
      error: error.message || error,
    })
  },
}

module.exports = responseHandler
