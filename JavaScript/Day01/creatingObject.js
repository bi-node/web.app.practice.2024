const person ={
    'firstname': 'John',
    'lastname': 'Martson',
    age: 30,
    "My gender" : "'male'"
}

console.log(person);
console.log(person.age);
console.log(typeof person);
console.log(person['My gender']);

const admin='role';
const rolename='guest';

person[admin]=rolename;
console.log(person);




