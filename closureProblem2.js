
function outest(){
  var c = 20
  function outer(a) {
  var x = 10;
  return function inner() {
    console.log(x, a, c);
  };
}
return outer
}

var out = outest()("hello !")
out()

// var s = "hello"
// var closure = outer(s)
// console.log(closure)
// closure()