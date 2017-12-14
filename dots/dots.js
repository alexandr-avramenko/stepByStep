function getPoints(a, b, range, quantity) {

    var x = b.x - a.x,
        y = b.y - a.y,
        sectionX = x / quantity,
        sectionY = y / quantity,
        pointX = a.x,
        pointY = a.y,
        coordinates = [];
        //randNum = Math.ceil(range * Math.random());

        for (var i = 0; i < quantity; i++) {
            pointX += sectionX;
            pointY += sectionY;
            coordinates.push({x: pointX, y: pointY})
        }


    console.log("x: " + x);
    console.log("section: " + sectionX);
    console.log("y: " + y);
    console.log(coordinates);

}



var a1 = {
    x: 2,
    y: 0
};

var a2 = {
    x: 14,
    y: 0
};

getPoints(a1, a2, 5, 4);