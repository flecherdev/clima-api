const currentMock = {"coord":{"lon":-79.42,"lat":43.7},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"base":"stations","main":{"temp":298.33,"feels_like":295.86,"temp_min":297.04,"temp_max":299.26,"pressure":996,"humidity":69},"visibility":10000,"wind":{"speed":8.2,"deg":240,"gust":11.3},"clouds":{"all":75},"dt":1598723921,"sys":{"type":1,"id":941,"country":"CA","sunrise":1598697521,"sunset":1598745520},"timezone":-14400,"id":6167865,"name":"Toronto","cod":200};

class WeatherServiceCurrentMock {
    async getCurrent() {
      return Promise.resolve(currentMock);
    }
}

module.exports = {
    currentMock,
    WeatherServiceCurrentMock
}