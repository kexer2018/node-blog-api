const express = require('express')
const router = express.Router()

const handleValidationErrors = require('../utils/middleware/error.middleware')
const verifyToken = require('../utils/middleware/verify-token')
const articleCtl = require('../controller/article.controller')

const {
  validateAddAriticle,
  validateGetList,
  validateGetInfo,
  validateUpdateArticle,
  validateDeleteArticle,
  validateGetFollowerList,
} = require('../utils/validator/ariticle.validator')

router.use(handleValidationErrors)
router.use(verifyToken)

router.post('/', validateAddAriticle, articleCtl.create)
router.get('/', validateGetList, articleCtl.getList)
router.get('/:id', validateGetInfo, articleCtl.getInfo)
router.put('/:id', validateUpdateArticle, articleCtl.update)
router.delete('/:id', validateDeleteArticle, articleCtl.deleteRecord)
router.get(
  '/followers/:id',
  validateGetFollowerList,
  articleCtl.getFollowerList
)

module.exports = router
