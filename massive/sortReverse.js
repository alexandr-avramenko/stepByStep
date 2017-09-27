var arr = [5, 2, 1, -10, 8];
console.log((reverse(sort(arr))));

function sort(arr) {
    return arr.sort();
}

function reverse (arrSorted) {
    return arrSorted.reverse();
}