var coordinates = [];

function getPoints(d1, d2, range, quantity) {

    var x = d2.x - d1.x,
        y = d2.y - d1.y,
        sectionX = x / quantity,
        sectionY = y / quantity,
        pointX = d1.x,
        pointY = d1.y,
        dot = {};
        //randNum = Math.ceil(range * Math.random());

        for (var i = 0; i < quantity; i++) {
            pointX += sectionX;
            pointY += sectionY;
            coordinates.push({x: pointX, y: pointY})
        }

    console.log("x: " + x);
    console.log("sectionX: " + sectionX);
    console.log("sectionY: " + sectionY);
    console.log("y: " + y);
    console.log(coordinates);

    // triangle
    var A = Math.atan(sectionX / range),

        a = range * Math.sin(A),
        b = range * Math.cos(A);

    console.log(Math.sin(A));
    console.log(Math.cos(A));

    console.log(a);
    console.log(b);

    if (y === 0) {
        dot.x = coordinates[0].x;
        dot.y = coordinates[0].y + range;
    } else if (x === 0) {
        dot.x = coordinates[0].x + range;
        dot.y = coordinates[0].y;
    } else {
        dot.x = coordinates[0].x + b;
        dot.y = coordinates[0].y + a;
        }

    console.log(dot);

}

var a1 = {
    x: 2,
    y: 3
};

var a2 = {
    x: 8,
    y: 6
};

getPoints(a1, a2, 10, 4);