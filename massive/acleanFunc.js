var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

alert(splitAndSort(arr));

function splitAndSort() {
    var obj = {};

    for (var i = 0; i < arr.length; i++) {
        var sorted = arr[i]
            .toLowerCase() //change case
            .split('') //each symbol convert to string and add to the massive
            .sort() //just sort
            .join(); // convert to string
        obj[sorted] = arr[i];
    }

    var result = [];

    for (var key in obj) {
        result.push(obj[key]);
    }
    console.log(result);
    return result;
}