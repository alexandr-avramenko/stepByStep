var vasya = {name: "Вася", age: 23};
var masha = {name: "Маша", age: 18};
var vovochka = {name: "Вовочка", age: 6};

var people = [vasya, masha, vovochka];

display(people.sort(sortByAge));

function display(value) {
    for (var i = 0; i < value.length; i++) {
        alert('Name: ' + value[i].name);
    }
}

function sortByAge (a, b) {
    if (a.age > b.age) {
        return 1;
    } else if (a.age < b.age) {
        return -1;
    } else return 0;
}