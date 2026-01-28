// odd number
// for (i = 0; i <= 20; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }
// even number
// let e = 0;
// while (e <= 20) {
//   if (e % 2 == 1) {
//     console.log(e);
//   }
//   e++
// }

let sum = 0;
for (i = 1; i <= 20; i++) {
  if (i % 3 == 0) {
    console.log(i);
    sum += i;
  }
  console.log('sum',sum);
  
}
console.log(i, sum);
