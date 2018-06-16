const request = require('request');

let getWeather = (lat , lang, callback) =>{
    request({
        url: `https://api.forecast.io/forecast/4a04d1c42fd9d32c97a2c291a325e2d/${lat}, ${lang}`,
        json: true
    }), (err, res, body) => {
        if (!err && res.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparenTtemperature: body.currently.apparenTtemperature
            });
        } else {
            callback('Unable to fetch weather.');
        }
    }
}


module.exports.getWeather = getWeather;