const { body,param } = require('express-validator')

const validateUserRegistration = [
  body('username')
    .notEmpty()
    .withMessage('username is required')
    .isString()
    .withMessage('username must be a string'),
  body('email')
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('Must be a valid email'),
  body('password')
    .notEmpty()
    .withMessage('password is required')
    .isLength({ min: 6 })
    .withMessage('password must be at least 6 characters long'),
]

const validateUserLogin = [
  body('username').notEmpty().withMessage('username is required'),
  body('password').notEmpty().withMessage('password is required'),
]

const validateUserFollow = [
  param('id').notEmpty().withMessage('id is required'),
  body('action').notEmpty().withMessage('action is required'),
]

const validateUserUpdate = [
  body('username')
    .optional()
    .isString()
    .withMessage('username must be a string'),
  body('email').optional().isEmail().withMessage('Must be a valid email'),
  body('password')
    .optional()
    .isLength({ min: 6 })
    .withMessage('password must be at least 6 characters long'),
]


module.exports = {
  validateUserRegistration,
  validateUserLogin,
  validateUserFollow,
  validateUserUpdate,
}
