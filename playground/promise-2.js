const request = require('request');

let geoCodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        let encodedAdress = encodeURIComponent(address);

        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAdress}`,
            json: true
        }, (err, res, body) => {
            if (err) {
                reject('Unable to connect to Google servers')
            } else if (body.status === 'ZERO_RESULTS ') {
                reject('Unable to find address ')
            } else if (body.status === 'OK') {
                // undefined instead of error message
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            }
        });
    });
}

geoCodeAddress('New York 1888').then((location) => {
    console.log('address:', JSON.stringify(location, null, 2));
}, (err) => {
    console.log('err :', err);
});