require('dotenv').config()

const config = {
    dev: process.env.NODE_ENV !== 'production',
    key_openWeather: process.env.KEY_OPENWEATHER,
    url_openWeather: process.env.URL_OPENWEATHER,
    port: process.env.PORT
}

module.exports = { config }
