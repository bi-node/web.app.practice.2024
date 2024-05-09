let x=1;
let timerId=setInterval(() => {
    console.log(x++);
}, 1000);


setTimeout(() => {clearInterval(timerId)
    
}, 10000);