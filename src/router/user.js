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

const verifyToken = require('../utils/middleware/verify-token')

router.use(handleValidationErrors)

/**
 * test
 */
router.get('/', (req, res) => {
  res.send('hello world')
})

router.post('/register', validateUserRegistration, userCtl.register)

router.post('/login', validateUserLogin, userCtl.login)

router.put('/update/:id', verifyToken, validateUserUpdate, userCtl.update)

router.post(
  '/toggle-favorite/:id',
  verifyToken,
  validateUserFollow,
  userCtl.toggleFavorite
)

module.exports = router
