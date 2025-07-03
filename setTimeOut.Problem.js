function x() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}

x();

// for (var i= 1; i<=5; i++){
//     setInterval(()=>{
//         console.log(i)
//     }, 1000)
// }
