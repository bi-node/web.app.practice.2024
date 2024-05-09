let x=1;
function foo(y){
    return function(z){
        return x+y+z;
    }
}

let f=foo(2);
console.log(foo(2)(5));
//logg console.log(f(5));
