// Position par défaut
var defaultPos = new google.maps.LatLng(48.579400,7.7519);
// Options de la carte
var optionsGmaps = {
    center:defaultPos,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoom: 15
};
// Initialisation de la carte pour l'élément portant l'id "map"
var map = new google.maps.Map(document.getElementById("map"), optionsGmaps);
var stock-lat-long;

function getMyPosition(position) {
    var infoPos = "Position :\n";
    infoPos += "Latitude : " + position.coords.latitude + "\n";
    infoPos += "Longitude: " + position.coords.longitude + "\n";
    infoPos += "Altitude : " + position.coords.altitude + "\n";
    document.getElementById("infoPos").innerHTML = infoPos;
}

function watchMyPosition(position) {
    var infoPos = "Position déterminée :\n";
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

navigator.geolocation.getCurrentPosition(maPosition, erreurPosition,{maximumAge:600000, enableHighAccuracy:true});

