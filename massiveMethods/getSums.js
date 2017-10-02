var arr = [1, 2, 3, 4, 5];

console.log(getSums(arr));
console.log(arr);

function getSums(arr) {
    var newArray = [];
    arr.reduce(function(sum, current) {
        newArray.push(sum + current);
        return sum + current;
    }, 0);
    return newArray;
}

