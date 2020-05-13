const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=26c342d8b6cd8ad70a5ae21ed284efb2&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '&units=f';

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!');
        } else if (body.error) {
            callback('Unable to find location!');
        } else {
            console.log(body)
            const current = body.current, daily = body.daily;
            const temperature = current.temperature, precipProbability = current.precip;
            const forecast = current.weather_descriptions[0] + '. It is currently ' + temperature + ' degrees out. There is a ' + precipProbability + '% chance of rain.';
            const windInformation = 'Winds are currently at ' + current.wind_speed + 'mph from ' + current.wind_dir + '.';
            const weather = {
                forecast,
                windInformation
            }
            callback(null, { weather });
        }
    })
}

module.exports = forecast;