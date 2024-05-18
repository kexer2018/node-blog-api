const express = require('express')
const router = express.Router()
const user = require('./user')
const articles = require('./articles')

router.use('/user', user)
router.use('/articles', articles)

module.exports = router