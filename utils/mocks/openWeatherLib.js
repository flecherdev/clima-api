
const should = require('should')

class OpenWeatherLibMock {
    location(city) {
        should(city).be.a.String()
    }

    forecast(city, cant){
        should(city).be.a.String()
        should(cant).be.a.Number()
    }
}

module.exports = OpenWeatherLibMock