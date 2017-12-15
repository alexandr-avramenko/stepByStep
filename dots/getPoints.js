var d1 = {
        x: 100,
        y: 100
    },
    d2 = {
        x: 500,
        y: 500
    },
    coordinates = getPoints(d1, d2, 3);
    console.log(coordinates);

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
        alf = (Math.PI / 2) + (Math.atan(dX / dY));

    var x = Math.cos(alf) * width + dot.x,
        y = Math.sin(alf) * width + dot.y;

    return {x: x, y: y};

}

var point = linesDraw(d1, d2, 5, coordinates[0]);
console.log(point);