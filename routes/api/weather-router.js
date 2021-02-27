const express = require('express')
const WeatherService = require('../../services/weather-service')

const weatherService = new WeatherService()

function weatherApiRouter(app) {
    const router = express.Router()

    app.use('/v1', router)

    router.get('/location', async (req, res, next) => {
        try {
            const location = await weatherService.getLocation();
            res.status(200).json({
                data: location,
                message: 'weather for public ip'
            })
        } catch (error) {
            next(error)
        }
    })
    
    router.get('/current/:city?', async (req, res, next) => {
        const { city } = req.params 
        try {
            const current = await weatherService.getCurrent(city)
            res.status(200).json({
                data: current,
                message: 'weather for current'
            })
        } catch (error) {
            next(error)
        }
    })
    
    router.get('/forecast/:city?', async (req, res, next) => {
        const { city } = req.params
        try {
            const forecast = await weatherService.getForecast(city)
            res.status(200).json({
                data: forecast,
                message: 'weather for forecast'
            })
        } catch (error) {
            next(error)
        }
    })
}

module.exports = weatherApiRouter