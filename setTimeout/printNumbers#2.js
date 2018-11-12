function printNumbers() {
    var i = 0,
        timeId = setTimeout(function print() {
            console.log(i);
            if (i === 20) {
                clearTimeout(timeId);
            }
            i++;
            setTimeout(print, 100)
        }, 100);
}

printNumbers();



function printNumbersTimeout20_100() {
    var i = 1;
    var timerId = setTimeout(function go() {
        console.log(i);
        if (i < 20) setTimeout(go, 100);
        i++;
    }, 100);
}

// вызов
printNumbersTimeout20_100();