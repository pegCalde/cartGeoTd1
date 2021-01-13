/*var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};*/

function getMyPosition(position) {
    var infoPos = "<strong>Position actuelle: </strong><br><br>";
    infoPos += "<strong>Latitude: </strong>Latitude: " + position.coords.latitude + "<br>";
    infoPos += "<strong>Longitude: </strong>" + position.coords.longitude + "<br>";
    infoPos += "<strong>Altitude: </strong>" + position.coords.altitude + "<br>";
    infoPos += "<strong>Vitesse : </strong>"+ position.coords.speed + "<br>";
    infoPos += "<strong>Date: </strong>" + new Date(position.timestamp);
    document.getElementById("infoPos").innerHTML = infoPos;
}

function watchMyPosition(position) {
    var infoPos = "Position actuelle: <br>";
    infoPos += "Latitude: " + position.coords.latitude + "<br>";
    infoPos += "Longitude: " + position.coords.longitude + "<br>";
    infoPos += "Altitude: " + position.coords.altitude + "<br>";
    infoPos += "Vitesse : " + position.coords.speed + "<br>";
    document.getElementById("infoPos").innerHTML = infoPos;
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getMyPosition);
} else {
    "<h2>La géolocalisation n'est pas possible</h2>";
}

var watchId = navigator.geolocation.watchPosition(watchMyPosition);
navigator.geolocation.clearWatch(watchId);
