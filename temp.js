var str = '{"title":"Конференция","date":"2014-11-30T12:00:00.000Z"}',
    event = JSON.parse(str, function (key, value) {

        if (key == 'date') {
        return new Date(value);
    }
    return value;
});

console.log(event.date.getDate());