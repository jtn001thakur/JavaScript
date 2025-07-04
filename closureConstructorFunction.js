function Counter() {
  var count = 0;
  this.increamentCounter = function () {
    count++;
    console.log(count)
  };
  this.decreamentCounter = function () {
    count--;
    console.log(count)
  };
}

var countValue = new Counter()
countValue.increamentCounter()
countValue.increamentCounter()
countValue.increamentCounter()

countValue.decreamentCounter()

// by using normal functions :->

// function counter(mode) {
//   var count = 0;
//   if (mode === "increament") {
//     return function increament() {
//       count++;
//       console.log(count);
//     //   console.log(count++);
//     };
//   } else if(mode === "decreament") {
//     return function decreament() {
//       count--;
//       console.log(count);
//     };
//   }
//   else {

//     console.log("Invalid Mode")
//   }
// }

// var countValue = counter("increament")
// countValue()
// countValue()
// countValue()
// countValue()

// value will not persist because counter() is invoking again
// var decCount = counter("decreament")
// decCount()


// by returning object which have methods :->

// function counter() {
//   var count = 0;
//   return {
//     increament: function () {
//       count++;
//       console.log("Increament :-", count);
//     },
//     decreament: function () {
//       count--;
//       console.log("Decreament :-", count);
//     },
//     getValue: function () {
//       return count;
//       // console.log(count)
//     },
//   };
// }

// var countValue = counter();
// countValue.increament();
// countValue.increament();
// countValue.increament();
// countValue.increament();

// countValue.decreament()