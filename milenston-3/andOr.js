let number = 124;
let roll = 25;
let job = true;

if (number > 123 && roll > 25) {
  console.log("tmi pass");
} else {
  console.log("tmi fail");
}

if (number > 124 || roll > 25) {
  console.log("tmi pass");
} else {
  console.log("tmi fail");
}

if ((number > 124 || roll == 25) && job == true) {
  console.log("biya hobe");
} else {
  console.log("tor bia nai");
}
let x = 10;
if (x > 5) {
  if (x < 15) {
    console.log("x is between 5 and 15");
  } else {
    console.log("x is greater than or equal to 15");
  }
} else {
  console.log("x is 5 or less");
}
