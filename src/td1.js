function getMyPosition(position) {
    var infoPos = "Position actuelle: <br>";
    infoPos += "Latitude: " + position.coords.latitude + "<br>";
    infoPos += "Longitude: " + position.coords.longitude + "<br>";
    infoPos += "Altitude: " + position.coords.altitude + "<br>";
    infoPos += "Vitesse : "+position.coords.speed +"<br>";
    document.getElementById("infoPos").innerHTML = infoPos;
}

function watchMyPosition(position) {
    var infoPos = "Position actuelle: <br>";
    infoPos += "Latitude: "+position.coords.latitude +"<br>";
    infoPos += "Longitude: "+position.coords.longitude+"<br>";
    infoPos += "Altitude: "+position.coords.altitude +"<br>";
    infoPos += "Vitesse : "+position.coords.speed +"<br>";
    document.getElementById("infoPos").innerHTML = infoPos;
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getMyPosition);
}

var watchId = navigator.geolocation.watchPosition(watchMyPosition);
navigator.geolocation.clearWatch(watchId);
