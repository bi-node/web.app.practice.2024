function sum(num1, num2){
    return num1+num2;
}

console.log(sum());
console.log(sum(1));
console.log(sum(3,4));
console.log(sum(3,5,2));

//overloading
function log(){
    console.log("No arguments");
    
}

function log(x){
    console.log("1 Argument",x);
    
}

function log(x,y){
    console.log("2 arguments",x,y);
    
}

log();
log(3);
log(4,5);






