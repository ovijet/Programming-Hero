// 1. Declare an array
// Declare an array with 5 elements containing fruits
// console log the 3rd index element
// change the value of the 2nd index element to jambura
// console log the final array
let fruits = ["apple", "mango", "banna", "lisu", "pishra"];
fruits[2] = "jambura";
console.log(fruits);

// 2. Add or remove elements
// Declare an array of 3 tourist destinations
// Add a new tourist destination to your tourist array
// Add two more to your array
// Remove the last tourist destination you have added
// display the final array as output
let tourist = ["dhaka", "khulna", "noapara"];
tourist.push("jashore", "noapara");
tourist.pop();
console.log(tourist);

// 3. Checking Array Membership with ‘includes’
// Instructions:

// Create an array of books containing different book.

// Use the includes method to check if the array contains a javascript book.

// Print a message to the console indicating whether the element is present in the array or not.

let books = ["html-book", "css-book", "js-book"];
// console.log(books.includes("js-book"));

// 4. Checking if it's an Array
// Instructions:

// Create different variables, each containing either an array or a non-array value.

// Now use isArray to check if each variable is an array.

// Print a message to the console indicating whether each variable is an array or not
let num = [1, 2, 3, 4, 5];
let string = "";
console.log(Array.isArray(num));
console.log(Array.isArray(string));

// 5. Combining Arrays
// Instructions:

// Create two arrays of your choice.
// Use the concat method to combine the two arrays into a new array.
// Print both the original arrays and the combined array using console.log().
let ovi = [1, 2, 3, 4, 5];
let ovi1 = [10, 20, 30, 40];
let total = ovi.concat(ovi1);
console.log(total);
