if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", process, false);
} else {
    "<h2>impossible de détecter l'orientation de l'appareil, le navigateur ne supporte pas cet évènement.</h2>";
}

function process(event) {
    var alpha = event.alpha; //angle de rotation (en degrés) autour de l’axe Z
    var beta = event.beta; //angle d’inclinaison (en degrés) autour de l’axe X
    var gamma = event.gamma; //angle d’inclinaison (en degrés) autour de l’axe Y
    document.getElementById("devOr").innerHTML = "<ul><li>Alpha : " + alpha + "</li><li>Beta : " + beta + "</li><li>Gamma : " + gamma + "</li></ul>";
}

//L'API Device Motion ne retourne pas de valeurs d'angles mais d'accélération en mètres par seconde au carré (m/s²), sur les trois axes x, y et z. 
//Son usage est semblable celui de l'Orientation.
if (window.DeviceMotionEvent) {
    window.addEventListener("devicemotion", process, false);
} else {
    "<h2>impossible de détecter le mouvement de l'appareil, le navigateur ne supporte pas cet évènement.</h2>";
}

function process(event) {
    var x = event.accelerationIncludingGravity.x;
    var y = event.accelerationIncludingGravity.y;
    var z = event.accelerationIncludingGravity.z;
    document.getElementById("devMotion").innerHTML = "<ul><li>X : " + x + "</li><li>Y : " + y + "</li><li>Z : " + z + "</li></ul>";
}