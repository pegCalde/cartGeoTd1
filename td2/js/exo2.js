//triangle des bermudes
var latBer = 7.873054;
var lonBer = 80.771797;

// On initialise la latitude et la longitude
var lat = 43.6877383;
var lon = 7.211371;
//var coords = navigator.geolocation.getCurrentPosition(getMyPosition);
var maCarte = null;

function initMap() {
    maCarte = L.map('map').setView([lat, lon], 11);
    //Leaflet ne récupère pas les cartes sur un serveur par défaut, on doit lui dire où on veut les récupérer -> openstreetmap.fr
    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
            //lien vers la source des données
            attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
            minZoom: 1,
            maxZoom: 20
        }).addTo(maCarte);
        //marqueur
        var marker = L.marker([lat, lon]).addTo(maCarte);
    }
    window.onload = function(){
    initMap(); 
};
