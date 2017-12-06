function User(fullName) {
    this.fullName = fullName;

        Object.defineProperties(this, {

            firstName: {
                set: function (value) {
                    this.firstName = value.split(' ')[0];
                }
            },

            lastName: {
                set: function(value) {
                    var arr = value.split(' ');
                    this.lastName = arr[1];
            }
        }
    });

}

var vasya = new User("Василий Попкин");