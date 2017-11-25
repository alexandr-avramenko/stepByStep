var users = [{
    name: "Вася",
    surname: 'Иванов',
    age: 20
}, {
    name: "Петя",
    surname: 'Чапаев',
    age: 25
}, {
    name: "Маша",
    surname: 'Медведева',
    age: 18
}];


function byField(field) {

    function sort (a, b) {
        return a[field] > b[field] ? 1 : -1;
    }

    return sort;
}

console.log(users.sort(byField('name')));
console.log(users.sort(byField('age')));