function counter() {
  var count = 0;
  console.log(count)
  return function increamentCounter() {
    count++;
    console.log(count);
  }
}
var increament = counter()
increament()
increament()
increament()


var increament2 = counter()
increament2()
increament2()
// console.log(count)