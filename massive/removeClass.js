var obj = {
    className: 'open menu menu close menu'
};

alert (convertToString(removeClass(convertToMassive(obj), prompt('What do you want to remove?', 'menu'))));


function convertToMassive (obj) {
    return obj.className.split(' ');
}

function removeClass (arr, target) {
    for (var i = 0; i <= arr.length; i++) {
        if (arr[i] == target) {
            arr.splice(i, 1);
            console.log('before:' + i);
            i--;
            console.log('after:' + i);
        }
    } console.log(arr);
    return arr;
}

function convertToString (arr) {
    return arr.join(' ');
}