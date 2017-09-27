var ask = 'background-color';

var result = convertToMassive(toUp(ask));
console.log(result);

function toUp(str) {
    var arr = str.split("");
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == "-") {
                var x = arr[i + 1],
                    y = x.toUpperCase();
                arr[i + 1] = y;
            }
    }
    return arr.join('');
}

function convertToMassive(str) {
    var converted = str.split('-');
    return converted.join("");
}