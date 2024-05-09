
function printnumbers(from, to){
for(let i=from; i<=to; i++){
    printlog(i, i-from);
}
}

function printlog(value, delay){
    setTimeout(() => { console.log(value);
        
    }, delay*1000);
}

printnumbers(6,18);