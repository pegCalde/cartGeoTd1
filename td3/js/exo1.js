function drawOnImg() {
    var canvas = document.getElementById("drawTD3Img");
    var ctx = canvas.getContext("2d");
    var img = document.createElement("img");

    canvas.height="800";
    canvas.width="1280";
    document.body.appendChild(canvas);
    img.src = "../img/prairie-humide.jpg";

    img.onload = function () {
    ctx.drawImage(img, 0, 0);

    //fillRect(startx, starty, hauteur, largeur)
    //maison
    ctx.beginPath();
    ctx.strokeStyle="brown";   
    ctx.lineWidth="2";   
    ctx.rect(50,300,200,210);
    ctx.fillStyle="chocolate";
    ctx.fill();
    ctx.stroke();
    
    //porte
    ctx.beginPath();   
    ctx.rect(130,428,50,80);
    ctx.fillStyle="orange";
    ctx.fill();

    //toit
    ctx.beginPath();
    ctx.moveTo(175, 50);
    ctx.lineTo(400, 225);
    ctx.lineTo(400, 25);
    ctx.fillStyle="red";
    ctx.fill();

    //arc( x, y, radius, startAngle, endAngle, sensAntiHoraire)
    //soleil
    ctx.beginPath();
    ctx.fillStyle="lightgrey"
    ctx.arc(800, 80, 50, 0, 2 * Math.PI);
    ctx.fill();
    }
}

function draw() {
    var canvas = document.getElementById("drawTD3");
    var ctx = canvas.getContext("2d");

    canvas.height="800";
    canvas.width="1280";
    document.body.appendChild(canvas);

    //fillRect(startx, starty, hauteur, largeur)
    //maison
    ctx.beginPath();
    ctx.strokeStyle="brown";   
    ctx.lineWidth="2";   
    ctx.rect(50,300,200,210);
    ctx.fillStyle="chocolate";
    ctx.fill();
    ctx.stroke();
    
    //porte
    ctx.beginPath();   
    ctx.rect(130,428,50,80);
    ctx.fillStyle="orange";
    ctx.fill();

    //toit
    ctx.beginPath();
    ctx.moveTo(175, 50);
    ctx.lineTo(400, 225);
    ctx.lineTo(400, 25);
    ctx.fillStyle="red";
    ctx.fill();

    //arc( x, y, radius, startAngle, endAngle, sensAntiHoraire)
    //soleil
    ctx.beginPath();
    ctx.fillStyle="lightgrey"
    ctx.arc(800, 80, 50, 0, 2 * Math.PI);
    ctx.fill();
}

