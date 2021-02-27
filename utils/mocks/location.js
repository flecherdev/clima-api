const locationMock = {"coord":{"lon":-58.38,"lat":-34.61},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"base":"stations","main":{"temp":287.57,"feels_like":285.86,"temp_min":287.15,"temp_max":288.15,"pressure":1015,"humidity":76},"visibility":10000,"wind":{"speed":2.6,"deg":180},"clouds":{"all":90},"dt":1598723591,"sys":{"type":1,"id":8224,"country":"AR","sunrise":1598696155,"sunset":1598736789},"timezone":-10800,"id":3435910,"name":"Buenos Aires","cod":200};

class WeatherServiceLocationMock {
    async getLocation() {
      return Promise.resolve(locationMock);
    }
}

module.exports = { 
    locationMock, 
    WeatherServiceLocationMock 
}