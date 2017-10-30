function makeBuffer() {
    var arr = [];
    function buffer() {
        if (arguments.length == 0) {
            return arr.toString();
        }
        for (var i = 0; i < arguments.length; i++) {
            arr.push(arguments[i]);
        }
        return arr.toString();
    }
    buffer.clear = function () {
        arr = [];
    };
    return buffer;
}


var buffer = makeBuffer();

// add values to the buffer
buffer('Тест');
buffer(' Тебя не съест');
console.log( buffer() );

// buffer clear
buffer.clear();
console.log( buffer() );

// new
buffer('New');
buffer(' string');
console.log( buffer() );;