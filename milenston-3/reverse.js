let reverse = "i want to bea computer";

let letter = "";
for (let text of reverse) {
  letter = text + letter;
}
// console.log(letter);
for (let i = 0; i < reverse.length; i++) {
  console.log(i);
  console.log(reverse[i]);
}
