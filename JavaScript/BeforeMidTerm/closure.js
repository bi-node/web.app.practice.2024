let x=10;
function foo(y){
    const bar=function(z){
        return x+z;
    }
    return bar;
}

console.dir(foo(2)(3));