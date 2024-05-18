const express = require('express')
const router = express.Router()


router.get('/',(req, res) => {
    res.send('list')
})

router.get('/:id',(req, res) => {
    res.send('info')
})

router.put('/:id',(req,res) => {
    res.send('update')
})

router.delete('/:id',(req,res) => {
    res.send('delete')
})

module.exports = router