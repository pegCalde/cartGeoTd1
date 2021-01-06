function getMyPosition(position) {
    var infoPos = "Position : <br>";
    infoPos += "Latitude : " + position.coords.latitude + "\n";
    infoPos += "Longitude: " + position.coords.longitude + "\n";
    infoPos += "Altitude : " + position.coords.altitude + "\n";
    document.getElementById("infoPos").innerHTML = infoPos;
}

function watchMyPosition(position) {
    var infoPos = "Position : <br>";
    infoPos += "Latitude : "+position.coords.latitude +"\n";
    infoPos += "Longitude: "+position.coords.longitude+"\n";
    infoPos += "Altitude : "+position.coords.altitude +"\n";
    infoPos += "Vitesse  : "+position.coords.speed +"\n";
    document.getElementById("infoPos").innerHTML = infoPos;
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getMyPosition);
}

var watchId = navigator.geolocation.watchPosition(watchMyPosition);
navigator.geolocation.clearWatch(watchId);

//navigator.geolocation.getCurrentPosition(getMyPosition,{maximumAge:600000, enableHighAccuracy:true});

