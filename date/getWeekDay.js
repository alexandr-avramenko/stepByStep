var date = new Date(2012,0,3),
    arr = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
    day = {},
    i;

// function getWeekDay(number, day, arr) {
//     for (i = 0; i < 6; i++) {
//         day[i] = arr[i];
//         if (number == i) {
//             return day[i];
//         }
//     }
// }

function getWeekDay(date) {
    var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

    return days[date.getDay()];
}


console.log(getWeekDay(date));