console.log("Closures");

function z(){
    var b=500
    function x(){
        var a=10
        function y(){
            console.log(a, b)
        }
        return y
    }
    return x
}

var w = z()
var inner = w()
inner()
// console.log(w)









// function z() {
//   var b = 50;
//   function x() {
//     var a = 10;

    //   return function y() {
    //     console.log(a);
    //   };

//     function y() {
//       console.log(a, b);
//     }
//     a = 100;
//     return y;
//     //   y();
//   }
//   x();
// }
// // const z = x();
// // console.log(z);
// z();
