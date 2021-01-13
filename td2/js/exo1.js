function startup() {
    var el = document.getElementsByTagName("canvas")[0];
    el.addEventListener("touchstart", handleStart, false);
    el.addEventListener("touchend", handleEnd, false);
}

document.addEventListener("DOMContentLoaded", startup);

var ongoingTouches = [];

function handleStart(evt) {
    evt.preventDefault();
    log("touchstart");
    var el = document.getElementById("canvas");
    var ctx = el.getContext("2d");
    var touches = evt.changedTouches;

    for (var i = 0; i < touches.length; i++) {
        console.log("touchstart:" + i + "...");
        ongoingTouches.push(copyTouch(touches[i]));
        var color = colorForTouch(touches[i]);
        ctx.beginPath();
        ctx.arc(touches[i].pageX, touches[i].pageY, 4, 0, 2 * Math.PI, false);
        ctx.fillStyle = color;
        ctx.fill();
        console.log("touchstart:" + i + ".");
    }
}

function handleEnd(evt) {
    evt.preventDefault();
    log("touchend");
    var el = document.getElementById("canvas");
    var ctx = el.getContext("2d");
    var touches = evt.changedTouches;

    for (var i = 0; i < touches.length; i++) {
        var idx = ongoingTouchIndexById(touches[i].identifier);

        if (idx >= 0) {
            ctx.lineWidth = 4;
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
            ctx.lineTo(touches[i].pageX, touches[i].pageY);
            ctx.fillRect(touches[i].pageX - 4, touches[i].pageY - 4, 8, 8);
            ongoingTouches.splice(idx, 1);
        } else {
            console.log("can't figure out which touch to end");
        }
    }
}

function log(msg) {
    var p = document.getElementById('log');
    p.innerHTML = msg + "\n" + p.innerHTML;
}