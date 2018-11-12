function Machine() {
    this._enabled = false;

    this.enable = function () {
        self._enabled = true;
    };

    this.disable = function () {
        self._enabled = false;
    };
}

function CoffeeMachine(power, capacity) {
    Machine.apply(this, arguments);

    var waterAmount = 0;

    var WATER_HEAT_CAPACITY = 4200;

    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    function onReady() {
        alert( 'Coffee is ready!' );
    }

    this.run = function() {
        if (!this._enabled) {
            throw new Error("Error. Coffee machine is disabled");
        }
        setTimeout(onReady(),getTimeToBoil());
    };
}

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.enable();
coffeeMachine.run();
coffeeMachine.disable();