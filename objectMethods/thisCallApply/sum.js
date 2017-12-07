// -----Variant #1------
function sumArgs() {
    var args = [].slice.call(arguments);
        return args.reduce(function (a, b) {
            return a + b;
        })
}

sumArgs(1, 2, 3);

// -----Variant #2------
function sumArgumens() {
    return [].reduce.call(arguments, function (a, b) {
        return a + b;
    })
}

sumArgumens(1, 2, 3);