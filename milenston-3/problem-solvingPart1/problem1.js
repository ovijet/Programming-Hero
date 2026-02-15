// function inceToFeet(ince) {
//   let feet = ince / 12;
//   return feet;

// }
// let result = inceToFeet(75);
//  console.log(result);

function inceToFeet(ince) {
  let feet = ince / 12;
  let incePlot = parseInt(feet);
  let last = ince % 12;
  let result1 = incePlot + " ft " +  last + " ince";
  return result1;
}
let result = inceToFeet(75);
console.log(result);
