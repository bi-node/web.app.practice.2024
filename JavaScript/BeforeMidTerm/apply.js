let marks={
    math: 20,
    science: 30
}

function total(name){
    return  `The marks of ${name} is ${this.math+this.science}` ;
}


console.log(total.apply(marks,['binod']));
console.log(total.call(marks,'binod'));

let result=total.bind(marks);
console.log(result('sabina'));





