function applyAll() {

    var arr = [].slice.call(arguments, 1);

    return arguments[0].apply(null, arr);

}

function sum() {
    return [].reduce.call(arguments, function (a, b) {
        return a + b;
    })
}

function mul() {
    return [].reduce.call(arguments, function(a, b) {
        return a * b;
    });
}


applyAll( sum, 1, 2, 3 ); // 6

applyAll( mul, 4, 2, 3 ); // 24

applyAll(Math.max, 2, -2, 3); // 3

applyAll(Math.min, 2, -2, 3); // -2

// --- for reference ---

// var user1 = {
//     x: 7,
//     y: 5,
//     sum: function () {
//         return this.x + this.y;
//     }
// };
//
// var user2 = {
//     x: 100,
//     y: 200
// };
//
// user1.sum.apply(user2);