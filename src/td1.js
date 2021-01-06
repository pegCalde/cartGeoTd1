var watchPos, currentPos, target;

var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

function success(pos) {
    var crd = pos.coords;

    console.log('Votre position actuelle est :');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude : ${crd.longitude}`);
    console.log(`La précision est de ${crd.accuracy} mètres.`);
}

function error(err) {
    console.warn(`error (${err.code}): ${err.message}`);
}

function successWatchPosition(pos) {
    var crd = pos.coords;

    if (target.latitude === crd.latitude && target.longitude === crd.longitude) {
        console.log('it works');
        navigator.geolocation.clearWatch(id);
    }
}

target = {
    latitude: 0,
    longitude: 0
};

optionsF = {
    enableHighAccuracy: false,
    timeout: 5000,
    maximumAge: 0
};

watchPos = navigator.geolocation.watchPosition(successWatchPosition, error, optionsF);
currentPos = navigator.geolocation.getCurrentPosition(success, error, options);

console.log(currentPos);
console.log(watchPos);