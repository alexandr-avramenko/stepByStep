var obj = {
    className: "open menu"
};

var me = prompt("new class?", '0');
var result = addClass(obj, me);
if (result == false) {
    alert("such word already exist");
} else {
    alert(result);
}


function addClass(obj, cls) {
    if (yesNo(obj, cls) == false) {
        return obj.className + ' ' + String(cls);
    } else {
        return 0;
    }
}

function yesNo(str, target) {
    var n = str.className;
    console.log(n);
    if (~n.indexOf(target)) {
        return 1;
    } else {
        return 0;
    }
}