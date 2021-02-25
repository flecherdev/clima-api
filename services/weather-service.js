const OpenWeatherLib = require('../lib/OpenWeatherLib')
const axios = require('axios')
const publicIp = require('public-ip')
var geoip = require('geoip-lite')

const openWeatherLib = new OpenWeatherLib()

class WeatherService {
    constructor(){
        this.dias = 5
    }

    async getLocation() {
        const city = await this.getCity()
        const location = await axios.get(openWeatherLib.location(city))
        return location.data || {}
    }

    async getCurrent(city) {
        const cityGeo = await this.getCity()
        const current = await axios.get(openWeatherLib.location(city ? city : cityGeo))
        return current.data || {}
    }

    async getForecast(city) {
        const cityGeo = await this.getCity()
        const forecast = await axios.get(openWeatherLib.forecast(city ? city : cityGeo, this.dias))
        return forecast.data || {}
    }

    async getCity() {
        const ip = await publicIp.v4()
        const geo = geoip.lookup(ip);
        return geo.city
    }
}

module.exports = WeatherService