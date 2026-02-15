function evenNumber(number) {
  let even = [];
  for (let num of number) {
    if (num % 2 === 0) {
      //   console.log(num);
      even.push(num);
    }
  }
  return even;
}
let number = [10, 21, 30, 43, 44];

let event = evenNumber(number);
console.log(event);
