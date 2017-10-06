var arr = [
    1, 2, 3,
    [4],
    ['You', 'just', 'learn', 'javascript'],
    112, 143124,44124
];

// changeToString(arr);
//
// function changeToString(arr) {
//     var result = [],
//         i;
//     for (i = 0; i < arr.length; i++) {
//         result.push(arr[i].join());
//         }
//         return(result.join());
// }

// var result = temp.reduce(function (n, current) {
//     return n + ',' + current.join()
//         }, []);
// console.log(result);

var result = convertToArray(arr).join();
console.log(result);

function convertToArray(arr) {
    var result = [],
        i;
    for (i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i]) == true) {
            result.push(arr[i].join());
        } else {
            result.push(arr[i]);
        }
    } return result;
}