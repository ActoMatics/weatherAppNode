const yargs = require('yargs');
const axios = require('axios');

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


let encodedAdress = encodeURIComponent(argv.address);

let geoCodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAdress}`;

axios.get(geoCodeUrl).then(res => {
    if (res.data.status === 'ZERO_RESULT') {
        throw new Error('Unbale to find address')
    }

    let lat = res.data.results[0].geometry.location.lat;
    let lng = res.data.results[0].geometry.location.lng;
    let weatherUrl = `https://api.forecast.io/forecast/4a04d1c42fd9d32c97a2c291a325e2d/${lat}, ${lng}`;

    console.log('res :', res.results.data[0].formatted_address);

    return axios.get(weatherUrl);
}).then((res) => {
    let temperature = res.data.currently.temperature;
    let apparenTtemperature = res.data.currently.apparenTtemperature;
    console.log(`Weather is ${temperature}. It feels like ${apparenTtemperature}.`);
}).catch(err => {
    if (err.code === 'ENOTFOUND') {
        console.log('unable to connect to API server');
    } else {
        console.log(err.message);
    }
});

