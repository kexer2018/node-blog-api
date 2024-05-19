const { body } = require('express-validator')

const validateUserRegistration = [
  body('username')
    .notEmpty()
    .withMessage('Username is required')
    .isString()
    .withMessage('Username must be a string'),
  body('email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Must be a valid email'),
  body('password')
    .notEmpty()
    .withMessage('Password is required')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
]

const validateUserLogin = [
  body('email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Must be a valid email'),
  body('password').notEmpty().withMessage('Password is required'),
]

const validateUserFollow = [
  body('id').notEmpty().withMessage('id is required'),
  body('action').notEmpty().withMessage('action is required'),
]

const validateUserUpdate = [
  body('username')
    .optional()
    .isString()
    .withMessage('Username must be a string'),
  body('email').optional().isEmail().withMessage('Must be a valid email'),
  body('password')
    .optional()
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
]

module.exports = {
  validateUserRegistration,
  validateUserLogin,
  validateUserFollow,
  validateUserUpdate,
}
