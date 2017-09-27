var arr = ["HTML", "JavaScript", "CSS"];
var arrSorted = sort(arr.slice(0));

console.log("sorted: " + arrSorted);
console.log("arr: " + arr);


function sort(arr) {
    return arr.sort();
}