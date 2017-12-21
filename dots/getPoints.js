var d1 = {
        x: 200,
        y: 540
    },
    d2 = {
        x: 860,
        y: 200
    },
    coordinates = getPoints(d1, d2, 3);

function getPoints (d1, d2, amount) {

    var x = d1.x,
        y = d1.y,
        dots = [];

    for ( var i = 1; i <= amount; i++) {
        x = (d2.x - d1.x) / (amount + 1) + x;
        y = (d2.y - d1.y) / (amount + 1) + y;
        dots.push({
            x: x,
            y: y
        })
    }

    return dots;
}

function linesDraw(d1, d2, width, dot) {

    var dX = d2.x - d1.x,
        dY = d2.y - d1.y,
        alf = (Math.PI / 2) + (Math.atan(dY / dX));

    var x = Math.cos(alf) * width + dot.x,
        y = Math.sin(alf) * width + dot.y;

    return {x: x, y: y};

}

function getRandomArbitary(min, max) {
    return Math.random() * (max - min) + min;
}


var point = linesDraw(d1, d2, 200, coordinates[0]);
var point1 = linesDraw(d1, d2, -100, coordinates[1]);
var point2 = linesDraw(d1, d2, 200, coordinates[2]);
console.log(point);

var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');

ctx.strokeStyle = "red";
ctx.lineWidth = "4";
ctx.moveTo(d1.x, d1.y);
ctx.lineTo(d2.x, d2.y);
ctx.stroke();

ctx.moveTo(coordinates[0].x, coordinates[0].y);
ctx.lineTo(point.x, point.y);
ctx.stroke();

ctx.moveTo(coordinates[1].x, coordinates[1].y);
ctx.lineTo(point1.x, point1.y);
ctx.stroke();

ctx.moveTo(coordinates[2].x, coordinates[2].y);
ctx.lineTo(point2.x, point2.y);
ctx.stroke();