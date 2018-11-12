
function Slot() {
    var me = this;
    var betline = new Betline(1);
    betline.slot = this;
    this.curOutcome = ['sym7', 'sym7', 'sym7'];
    this.stopSpin = function () {
        betline.checkOutcome();
    };
}

function Betline(num) {
    this.checkOutcome = function () {
        console.log(this.slot.curOutcome);
    }
}
