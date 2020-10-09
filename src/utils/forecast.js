const request = require('request')

const forecast = (lat, long, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=85e5259c6f7f6a67e0cd9898311e97e9&query=${lat},${long}&units=m`
    
    request({ url, json: true }, (error, { body } = {}) => {
      if (error) {
          callback('Unable to connect to weather service!', '')
      } else if (body.error) {
          callback('Unable to find location', '')
      } else {
          callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out. Windspeed is: ' + body.current.wind_speed);
        }
    })  
}

module.exports = forecast

