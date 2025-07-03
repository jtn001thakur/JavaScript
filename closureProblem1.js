function makeCounter() {
  let counter = 0;
  return function () {
    counter = counter + 1;
    return counter;
  };
}

let addOne = makeCounter()
console.log(addOne)
let a = addOne()
let b = addOne()
let c = addOne()
console.log(a, b, c)
