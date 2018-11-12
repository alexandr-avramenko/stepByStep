function User() {
    var firstName = '',
        surname = '';
    
    this.setFirstName = function (name) {
        firstName = name;
    };

    this.setSurname = function (value) {
        surname = value;
    };

    this.getFullName = function () {
        return firstName + ' ' + surname;
    };
}

var user = new User();
user.setFirstName('Petya');
user.setSurname('Ivanov');

alert(user.getFullName());