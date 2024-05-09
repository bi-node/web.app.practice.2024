
let animal={
    eats:true,
    walking: function(){
        console.log("walking....")    
    }
};

let rabbit=Object.create(animal);
rabbit.jumps=true;
rabbit.run=function(){
    console.log("running");
    
}
console.log(Object.keys(rabbit));
for(let prop in rabbit)
    {
        let isOwn=rabbit.hasOwnProperty(prop);
        if( isOwn)
            console.log(`Own Property is ${prop}`);
            
        else
            console.log(`Inherited Property is ${prop}`);
            
            
      
        
    }

//console.log(animal);




