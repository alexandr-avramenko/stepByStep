var d1 = {
    x: 2,
    y: 2
},
    d2 = {
    x: 7,
    y: 5.5
};

var coordinates = [],
    dot = {};

function getDots(d1, d2, lineWidth, quantity) {
//lineLength = Math.sqrt(Math.pow((d2.x - d1.x), 2) + Math.pow((d2.y - d1.y), 2)),
//segmentLine = lineLength / quantity,

    var deltaX = d2.x - d1.x,
        deltaY = d2.y - d1.y,

        segmentX = deltaX / quantity,
        segmentY = deltaY / quantity,

        pointX = d1.x,
        pointY = d1.y;

    for (var i = 1; i < quantity; i++) {
        pointX += segmentX;
        pointY += segmentY;
        coordinates.push({x: pointX, y: pointY})
    }


    var angleAlfa = Math.atan(deltaX / deltaY),
        angleBeta = (Math.PI / 2) - angleAlfa, // Math.PI/2 - 90 degrees
        axialByX = lineWidth * Math.sin(angleBeta),
        axialByY = lineWidth * Math.cos(angleBeta);

    if (deltaY === 0) {
        dot.x = coordinates[0].x;
        dot.y = coordinates[0].y + lineWidth;
    } else if (deltaX === 0) {
        dot.x = coordinates[0].x + lineWidth;
        dot.y = coordinates[0].y;
    } else  {
        dot.x = coordinates[0].x - axialByX;
        dot.y = coordinates[0].y + axialByY;
    }

    console.log(dot);
}

getDots(d1, d2, 1.5, 2);










function getPoints (n1, n2, amount) {

    return n2 - n1;

}