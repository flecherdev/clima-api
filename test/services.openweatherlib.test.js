const assert = require('assert')
const WeatherService = require('../services/weather-service')

describe("Service - location", function(){
    const weatherService = new WeatherService()

    describe('when getLocation method is called', async function(){
        it('should call the loctaion OpenWeatherLib method object', async function(){
            const res = await weatherService.getLocation()
            assert.ok(typeof res === 'object');
        })
    })
})

describe("Service - current", function(){
    const weatherService = new WeatherService()

    describe('when getCurrent method is called', async function(){
        it('should call the loctaion OpenWeatherLib method return a object and the name of parameter function should same of object.name', async function(){
            const res = await weatherService.getCurrent('Montreal')
            assert.ok(typeof res === 'object')
            assert.ok(res.name === 'Montreal')
        })
    })

    describe('when getCurrent method is called', async function(){
        it('should call the loctaion OpenWeatherLib method return a object and if the parameter is null should get object.name local name of city', async function(){
            const res = await weatherService.getCurrent()
            assert.ok(typeof res === 'object')
            assert.ok(res.name === await weatherService.getCity() )
        })
    })
})


describe("Service - forecast", function(){
    const weatherService = new WeatherService()

    describe('when getForecast method is called', async function(){
        it('should call the forecast OpenWeatherLib method return a object and the name of parameter function should same of object.name', async function(){
            const res = await weatherService.getForecast('Montreal')
            assert.ok(typeof res === 'object')
            assert.ok(res.city.name === 'Montreal')
        })
    })

    describe('when getCurrent method is called', async function(){
        it('should call the forecast OpenWeatherLib method return a object and should exist object.list', async function(){
            const res = await weatherService.getForecast()
            console.log(typeof res.list)
            assert.ok(typeof res.list === 'object' )
        })
    })
})