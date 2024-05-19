const express = require('express')
const router = express.Router()

/**
 * test
 */
router.get('/', (req, res) => {
    res.send('hello world')
})

router.post('/register', (req, res) => {
    res.send('register')
})

router.post('/login', (req, res) => {
    res.send('login')
})

router.put('/update', (req, res) => {
    res.send('update')
})

router.post('/follow/:id', (req, res) => {
    res.send('follow')
})

module.exports = router