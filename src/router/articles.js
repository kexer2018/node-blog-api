const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
    res.send('create')
})
router.get('/', (req, res) => {
    res.send('list')
})

router.get('/:id', (req, res) => {
    res.send('info')
})

router.put('/:id', (req, res) => {
    res.send('update')
})

router.delete('/:id', (req, res) => {
    res.send('delete')
})

router.get('/star/:id', (req, res) => {
    res.send('star')
})

router.get('/followers/:id', (req, res) => {
    res.send('list')
})

module.exports = router