
function b()
{
    console.log("Hellow World!");
    
}

setTimeout(b,200);
let timerId=setInterval(b,500);
setTimeout(()=>clearInterval(timerId),5000);
