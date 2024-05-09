let person={
    name:'john',
    printName:function(){
        console.log(`His name is ${this.name}`);
    }
}

setTimeout(person.printName,1000);

setTimeout(() => {person.printName();
    
}, 2000);

setTimeout(person.printName.bind(person), 2000)
setTimeout(() => {person.printName.call(person)
    
}, 3000);