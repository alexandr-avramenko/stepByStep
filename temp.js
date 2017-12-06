var user = {
    firstName: "Вася",
    surname: "Петров"
};

Object.defineProperty(user, "fullName", {
    get: function() {
        return this.firstName + ' ' + this.surname;
    }
});

alert(user.fullName); // Вася Петров