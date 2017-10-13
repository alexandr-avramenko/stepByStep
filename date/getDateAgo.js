var date = new Date(2015, 0 ,2);


function getDateAgo (date, days) {
    var dateCopy = new Date(date);
    dateCopy.setDate(dateCopy.getDate() - days);
    return dateCopy;
}

var options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
};

console.log(getDateAgo(date, 365).toLocaleString('en', options));