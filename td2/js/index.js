(function () {
    var setting = {"height":531,"width":803,"zoom":14,"queryString":"528 Bd du Mercantour, 06200 Nice, France","place_id":"ChIJs-q8-K_RzRIRfAxyZ8Xs0b0","satellite":false,"centerCoord":[43.68666006214183,7.208917503498475],"lang":"fr","cityUrl":"/france/saint-laurent-du-var-18930","cityAnchorText":"Carte de Saint-Laurent-du-Var, Sud de la France, France","id":"map-9cd199b9cc5410cd3b1ad21cab2e54d3","embed_id":"338740"};
    var d = document;
    var s = d.createElement('script');
    s.src = 'https://1map.com/js/script-for-user.js?embed_id=338740';
    s.async = true;
    s.onload = function (e) {
    window.OneMap.initMap(setting)
};
    var to = d.getElementsByTagName('script')[0];
    to.parentNode.insertBefore(s, to);
})();