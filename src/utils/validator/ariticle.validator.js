const { body, param } = require('express-validator')

const validateAddAriticle = [
  body('title').notEmpty().withMessage('title is required'),
  body('content').notEmpty().withMessage('content is required'),
  body('createdBy').notEmpty().withMessage('createdBy is required'),
]

const validateGetList = [
  body('user').notEmpty().withMessage('user is required'),
]

const validateGetInfo = [param('id').notEmpty().withMessage('id is required')]

const validateUpdateArticle = [
  param('id').notEmpty().withMessage('id is required'),
  body('title').optional(),
  body('content').optional(),
]

const validateDeleteArticle = [
  param('id').notEmpty().withMessage('id is required'),
]

const validateGetFollowerList = [
  param('id').notEmpty().withMessage('id is required'),
]

module.exports = {
  validateAddAriticle,
  validateGetList,
  validateGetInfo,
  validateUpdateArticle,
  validateDeleteArticle,
  validateGetFollowerList,
}
