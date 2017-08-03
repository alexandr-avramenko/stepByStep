// var name = prompt("Please, specify your name:", 'yourName');
// var result = ucFirst(name);
//     alert(result);
//
// function ucFirst(n) {
//     n[0].toUpperCase()
// }

var name = prompt("Specify your name please: ", "name");
alert(upCase(name));

function upCase (me) {
    return me[0].toUpperCase() + me.slice(1);
}