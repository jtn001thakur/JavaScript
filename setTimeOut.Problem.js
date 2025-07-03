//  by using var

function x() {
  for (var i = 1; i <= 5; i++) {

    function closure(i) {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    }

    closure(i)
  }
}

x();

// by using let

// function x() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
// }

// x();
