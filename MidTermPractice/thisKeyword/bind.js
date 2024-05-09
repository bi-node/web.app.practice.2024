const person = { name: 'Lydia' };

function sayHi(age) {
  return `${this.name} is ${age}`;
}

console.log(sayHi.call(person, 21));

let boundFunction = sayHi.bind(person); // Bind sayHi function to the person object
console.log(boundFunction(21)); // Call the bound function with the desired argument
