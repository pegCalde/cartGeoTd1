if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", process, false);
} else {
    "<h2>impossible de détecter l'orientation de l'appareil, le navigateur ne supporte pas cet évènement.</h2>";
}

function process(event) {
    var alpha = event.alpha; //angle de rotation (en degrés) autour de l’axe Z
    var beta = event.beta; //angle d’inclinaison (en degrés) autour de l’axe X
    var gamma = event.gamma; //angle d’inclinaison (en degrés) autour de l’axe Y
    document.getElementById("devOr").innerHTML = "Alpha : " + alpha + "</br>Beta : " + beta + "</br>Gamma : " + gamma; 
}