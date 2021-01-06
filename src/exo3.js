if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceOrientation", process, false);
} else {
    // Le navigateur ne supporte pas l'événement deviceorientation
}

function process(event) {
    var alpha = event.alpha; //angle de rotation (en degrés) autour de l’axe Z
    var beta = event.beta; //angle d’inclinaison (en degrés) autour de l’axe X
    var gamma = event.gamma; //angle d’inclinaison (en degrés) autour de l’axe Y
    document.getElementById("devOr").innerHTML = "<ul><li>Alpha : " + alpha + "</li><li>Beta : " + beta + "</li><li>Gamma : " + gamma + "</li></ul>"; 
}