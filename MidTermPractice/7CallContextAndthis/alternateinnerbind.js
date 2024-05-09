let user = {
    role: 'Administrator',
    print: function() {
        console.log(`The role is ${this.role}`);
    }
};

user.another = function() {
    console.log(`Inner function the role is ${this.role}`);
};

user.print(); // Calling the print method
user.another(); // Calling the inner function directly from outside
