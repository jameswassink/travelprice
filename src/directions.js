const googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyA70eVOEF6Y_gXFe631ThgaTvwG_A3q3PQ',
    Promise: require('q').Promise
});

module.exports = async function (origin, destination) {
    const response = await googleMapsClient.directions({
        // origin: '10 Gwinganna Avenue, Kiama NSW 2533, Australia',
        // destination: '51 Emu Rd, Glenbrook NSW',
        // origin: '-33.9642466,150.875037',
        // destination: '-33.7930349,150.8363779'
        origin: origin,
        destination: destination
    }).asPromise();

    const firstRoute = response.json.routes[0];
    const duration = firstRoute.legs[0].duration.value;

    return {
        duration: firstRoute.legs[0].duration.value,
        polyline: firstRoute.overview_polyline.points
    }
};