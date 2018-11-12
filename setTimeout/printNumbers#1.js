function printNumbersInterval() {
    var i = 0;
    var timeId = setInterval(function () {
        console.log(i);
        if (i === 20) {
            clearInterval(timeId);
        }
        i++;
    }, 100)
}

printNumbersInterval();