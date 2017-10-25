function makeBuffer() {
    var arr = [];
    return function() {
        if (arguments.length == 0) {
            return arr.toString();
        }
        for (var i = 0; i < arguments.length; i++) {
            arr.push(arguments[i]);
        }
            return arr.toString();
        };
}

var buffer = makeBuffer();

// add values to the buffer
buffer('Использовать');
buffer(' Замыкание');
buffer(' Нужно!');

// get current buffer value
console.log( buffer() );


var buffer2 = makeBuffer();
buffer2(0);
buffer2(1);
buffer2(0);

// get current buffer value
console.log( buffer2() );

