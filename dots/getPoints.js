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