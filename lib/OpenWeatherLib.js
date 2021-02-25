const { config } = require('../config')
const publicIp = require('public-ip');

const URL = config.url_openWeather
const KEY = config.key_openWeather

class OpenWeatherLib {
    constructor() {
        this.url = URL
        this.key = KEY
    }

    // location and current
    location(city) {
        console.log(this.key)
        console.log(this.url)
        return `${this.url}weather?q=${city}&appid=${this.key}`
    }

    forecast(city, cant) {
        return `${this.url}forecast?q=${city}&mode=json&units=metric&cnt=${cant}&appid=${this.key}`
    }
}

module.exports = OpenWeatherLib