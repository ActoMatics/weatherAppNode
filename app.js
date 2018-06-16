const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;


geocode.geocodeAddress(argv.address, (errorMessage, result) => {
    if (errorMessage) {
        console.log(errorMessage)
    } else {
        console.log(result.address);

        weather.getWeather(result.latitude, result.longitude, (err, weatherRes) => {
            if (!err && res.statusCode === 200) {
                console.log(`The weather is ${weatherRes.temperature}. It feels like ${weatherRes.apparentTemperature}`);
            } else {
                console.log('Unable to fetch weather ', err);
            }
        });
    }
});



