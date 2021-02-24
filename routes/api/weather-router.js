const express = require('express')
const router = express.Router()

router.get('/location', (req, res, next) => {
    res.status(200).json({
        data: 'info',
        message: 'weather for public ip'
    })
})

router.get('/current/:city', (req, res, next) => {
    const { city } = req.params
    console.log(city)
    res.status(200).json({
        data: 'info',
        message: 'weather for city'
    })
})

router.get('/forecast/:city?', (req, res, next) => {
    const { city } = req.params
    console.log(city)
    res.status(200).json({
        data: 'info',
        message: 'weather for id'
    })
})

module.exports = router