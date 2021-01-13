/** affichage position */

function getMyPosition(position) {
    var infoPos = "<strong>Position actuelle: </strong><br><br>";
    infoPos += "<strong>Latitude: </strong>" + position.coords.latitude + "<br>";
    infoPos += "<strong>Longitude: </strong>" + position.coords.longitude + "<br>";
    infoPos += "<strong>Date: </strong>" + new Date(position.timestamp);
    document.getElementById("infoPos").innerHTML = infoPos;
}

function watchMyPosition(position) {
    var infoPos = "Position actuelle: <br>";
    infoPos += "Latitude: " + position.coords.latitude + "<br>";
    infoPos += "Longitude: " + position.coords.longitude + "<br>";
    document.getElementById("infoPos").innerHTML = infoPos;
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getMyPosition);
} else {
    "<h2>La géolocalisation n'est pas possible</h2>";
}
//var getPos = navigator.geolocation.getCurrentPosition(getMyPosition);
var watchId = navigator.geolocation.watchPosition(watchMyPosition);
//navigator.geolocation.clearWatch(watchId);


/** affichage carte avec marqueur */

// On initialise la latitude et la longitude
var lat = 43.6877383;
var long = 7.211371;
//var coords = navigator.geolocation.getCurrentPosition(getMyPosition);
var maCarte = null;

function initMap() {
    maCarte = L.map('map').setView([lat, long], 11);
    //Leaflet ne récupère pas les cartes sur un serveur par défaut, on doit lui dire où on veut les récupérer -> openstreetmap.fr
    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
            //lien vers la source des données
            attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
            minZoom: 1,
            maxZoom: 20
        }).addTo(maCarte);
        //marqueur
        var marker = L.marker([lat, long]).addTo(maCarte);
    }
    window.onload = function(){
    initMap(); 
};