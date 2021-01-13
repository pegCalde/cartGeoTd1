function processOrientation(event) {
    var alpha = event.alpha; //angle de rotation (en degrés) autour de l’axe Z
    var beta = event.beta; //angle d’inclinaison (en degrés) autour de l’axe X
    var gamma = event.gamma; //angle d’inclinaison (en degrés) autour de l’axe Y
    document.getElementById("devOr").innerHTML = "<ul><li><strong>Alpha : </strong>" + alpha + "</li><li><strong>Beta : </strong>" + beta + "</li><li><strong>Gamma : </strong>" + gamma + "</li></ul>";
}

//L'API Device Motion ne retourne pas de valeurs d'angles mais d'accélération en mètres par seconde au carré (m/s²), sur les trois axes x, y et z. 
//Son usage est semblable celui de l'Orientation.
function processMotion(event) {
    /*var alpha = event.alpha; //angle de rotation (en degrés) autour de l’axe Z
    var beta = event.beta; //angle d’inclinaison (en degrés) autour de l’axe X
    var gamma = event.gamma; //angle d’inclinaison (en degrés) autour de l’axe Y*/
    var x = event.accelerationIncludingGravity.x;
    var y = event.accelerationIncludingGravity.y;
    var z = event.accelerationIncludingGravity.z;
    //document.getElementById("devOr").innerHTML = "<ul><li>Alpha : " + alpha + "</li><li>Beta : " + beta + "</li><li>Gamma : " + gamma + "</li></ul>";
    document.getElementById("devMotion").innerHTML = "<ul><li><strong>X : </strong>" + x + "</li><li><strong>Y : </strong>" + y + "</li><li><strong>Z : </strong>" + z + "</li></ul>";
}

if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", processOrientation, false);
} else {
    "<h2>impossible de détecter l'orientation de l'appareil, le navigateur ne supporte pas cet évènement.</h2>";
}

if (window.DeviceMotionEvent) {
    window.addEventListener("devicemotion", processMotion, false);
} else {
    "<h2>impossible de détecter le mouvement de l'appareil, le navigateur ne supporte pas cet évènement.</h2>";
}