const request = require('request');

let geocodeAddress = (address, callback) => {
    let encodedAdress = encodeURIComponent(address);

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAdress}`,
        json: true
    }, (err, res, body) => {
        if (err) {
            callback('Unable to connect to Google servers ')
        } else if (body.status === 'ZERO_RESULTS ') {
            callback('Unable to find address ')
        } else if (body.status === 'OK') {
            // undefined instead of error message
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        }
    });
}

module.exports.geocodeAddress = geocodeAddress;

//secret key - f87c7660919e10cba2725006d5143649
//  https://api.darksky.net/forecast/f87c7660919e10cba2725006d5143649/32.138798,34.909148
