function evenAvg(numbers) {
  let even = [];
  for (let number of numbers) {
    if (number % 2 === 0) {
      even.push(number);
    }
  }
  let sum = 0;
  for (let evenSum of even) {
    sum += evenSum;
  }
  let count = even.length;
  let avg = sum / count;
  return avg
  
}
let numbers = [10, 20, 31, 33, 40, 50, 55, 70,80];
let totalAvg = evenAvg(numbers);
console.log("total even number avg :", totalAvg);
