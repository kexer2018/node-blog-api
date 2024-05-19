const express = require('express')
const router = express.Router()

const userCtl = require('../controller/user.controller')
const handleValidationErrors = require('../utils/middleware/error.middleware')

const {
  validateUserRegistration,
  validateUserLogin,
  validateUserFollow,
  validateUserUpdate,
} = require('../utils/validator/user.validator')

/**
 * test
 */
router.get('/', (req, res) => {
  res.send('hello world')
})

router.post(
  '/register',
  validateUserRegistration,
  handleValidationErrors,
  userCtl.register
)

router.post('/login', validateUserLogin, handleValidationErrors, userCtl.login)

router.put(
  '/update',
  validateUserUpdate,
  handleValidationErrors,
  userCtl.update
)

router.post(
  '/toggle-favorite',
  validateUserFollow,
  handleValidationErrors,
  userCtl.toggleFavorite
)

module.exports = router
