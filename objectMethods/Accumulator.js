function Accumulator(start) {

    this.value = start;
    
    this.read = function () {
        this.value += +prompt("How much do you want to add?", '0');
    };

}

var accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);