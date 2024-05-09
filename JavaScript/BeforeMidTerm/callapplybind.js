let user = {
    firstName: "John",
    sayHi() {
        console.log(`Hello,${this.firstName}!`);
    }
};


function greetings(){
    console.log(`Hello ${this.firstName}`);
}


greetings.call(user);


