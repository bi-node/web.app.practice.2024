let user={
    role:'Administrator',
    print: function(){
        console.log(`The role is ${this.role}`);
        function another(){
            console.log(`Inner function the role is ${this.role}`);
        
        }
        let output = another.bind(this);
        output();

        
    }
}

user.print();


