var arr = [
    [1, 2, 3],
    [4],
    ['You', 'just', 'learn', 'javascript'],
    [112, 143124,44124]
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

var res = arr.reduce(function (n, current) {
    return n + ',' + current.join()
        }, []);
console.log(res);