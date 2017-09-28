var inputArray = [5, 3, 8, 1];
filterRangeInPlace(inputArray, prompt('a?'), prompt('b?'));
alert(inputArray);

function filterRangeInPlace(arr, a, b) {
    var i;
    for (i = 0; i <= arr.length; i++) {
        var val = arr[i];
        if (a > val || val > b) {
            arr.splice(i--, 1);
        }
    }
}