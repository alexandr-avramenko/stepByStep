function Calculator() {
    
    var methods = {
        '-': function (a, b) {
            return a - b;
        },
        '+': function (a, b) {
            return a + b;
        }
    };

    this.calculate = function (str) {
        var el = str.split(' '),
            a = +el[0],
            op = el[1],
            b = +el[2];

        if (!methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return methods[op](a, b);

    };

    this.addMethod = function (op, func) {
        methods[op] = func;
    };

}

var calculator = new Calculator;

calculator.addMethod("*", function(a, b) {
    return a * b;
});

calculator.addMethod("/", function (a, b) {
    return a / b;
});

calculator.addMethod("**", function (a, b) {
    return Math.pow(a, b);
});

alert(calculator.calculate("5 * 9"));