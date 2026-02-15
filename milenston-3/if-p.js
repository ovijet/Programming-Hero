/***
Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/
let burger = "400tk";
if (burger > "450tk") {
  console.log("free coke");
} else {
  console.log("else coke:30tk");
}
/*** 
BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.
*/
let weight = 70;
let height = 1.7;
let BMI = weight / (height * height);
console.log(BMI.toFixed(2));
if (BMI < 18.5) {
  console.log("you are underweight.");
} else if (BMI >= 18.5 && BMI <= 24.9) {
  console.log("you are normal");
} else if (BMI >= 25 && BMI <= 29.9) {
  console.log("you are overweight");
} else {
  console.log("you are obese");
}

/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
let score = 85;

if (score > 90 && score < 100) {
  console.log("A");
} else if ((score) => 80 && score <= 89) {
  console.log("B");
} else if ((score) => 80 && score <= 89) {
  console.log("B");
} else if ((score) => 70 && score <= 79) {
  console.log("B");
} else if (score > 60 && score <= 69) {
  console.log("B");
} else if (score > 0 && score <= 50) {
  console.log("F");
} else {
  console.log("tmi fail");
}

/*Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
let age = 15;
if (age < 10) {
  console.log("free");
} else if (age <= 15) {
  console.log("50% discount");
} else if (age >= 60) {
  console.log("15%");
} else {
  console.log(" ticket fare 800 tk");
}
