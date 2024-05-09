function Account(acc_name, acc_type, balance){
    this.acc_name=acc_name;
    this.acc_type=acc_type;
    this.balance=[];
}

let acc1=new Account('Binod Rasaili', 'saving');
let acc2=new Account('Sabina Lagun', 'checking')


Account.prototype.addBalance=function(amount){
    this.balance.push(amount);
}


acc1.addBalance(30000);
acc1.addBalance(40000);
acc2.addBalance(5600);

console.log(acc1.balance);


