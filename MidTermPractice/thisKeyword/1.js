function sayHi() {
    return (() => 'a')();
  }
  
  console.log(typeof sayHi());

  var x = 5;
(function () {
  console.log(x);
})();

for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
  }
  
  for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
  }