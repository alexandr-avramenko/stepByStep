var d1 = {
        x: 2,
        y: 2
    },
    d2 = {
        x: 7,
        y: 5.5
    };

var coordinates = [],
    dots = [];

function getDots(d1, d2, lineWidth) {
//lineLength = Math.sqrt(Math.pow((d2.x - d1.x), 2) + Math.pow((d2.y - d1.y), 2)),
//segmentLine = lineLength / quantity,

    var deltaX = d2.x - d1.x,
        deltaY = d2.y - d1.y,

        angleAlfa = Math.atan(deltaX / deltaY),
        angleBeta = (Math.PI / 2) - angleAlfa, // Math.PI/2 - 90 degrees

        axialByX = lineWidth * Math.sin(angleBeta),
        axialByY = lineWidth * Math.cos(angleBeta);

    for (var i = 0; i < coordinates.length; i++) {

        if (!deltaY) {
            dots.push({
                x: coordinates[i].x,
                y: coordinates[i].y + lineWidth});
        } else if (!deltaX) {
            dots.push({
                x: coordinates[i].x + lineWidth,
                y: coordinates[i].y});
        } else  {
            dots.push({
                x: coordinates[i].x - axialByX,
                y: coordinates[i].y + axialByY});
        }
    }

}

getPoints(d1, d2, 4);

getDots(d1, d2, 1.5, 2);

console.log(coordinates);
console.log(dots);


function getPoints (d1, d2, amount) {

    var deltaX = d2.x - d1.x,
        deltaY = d2.y - d1.y,

        segmentX = deltaX / amount,
        segmentY = deltaY / amount,

        pointX = d1.x,
        pointY = d1.y;

    for (var i = 1; i <= amount; i++) {
        pointX += segmentX;
        pointY += segmentY;
        coordinates.push({x: pointX, y: pointY})
    }

}