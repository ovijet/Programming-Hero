//task-1
// "I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

for (i = 0; i <= 60; i++) {
  (console.log(
    "I will invest at least 6 hrs every single day for next 60 days!",
  ),
    i);
}

// task-2
// Find all the odd numbers from 61 to 100.

for (i = 61; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
// Subtask-2:
// Find all the even numbers from 78 to 98.
let e = 78;
while (e <= 98) {
  if (e % 2 == 1) {
    console.log(e);
  }
  e++;
}

// task-3
// Subtask-1:

// Display sum of all the odd numbers from 91 to 129.
let sum = 0;
for (i = 91; i <= 129; i++) {
  if (i % 2 == 0) {
    sum += i;
    console.log(i);
  }
}
console.log(i, sum);

// Subtask-2:

// Display sum of all the even numbers from 51 to 85.
let total = 0;
for (i = 51; i <= 85; i++) {
  if (i % 2 == 1) {
    total += i;
    console.log(i);
  }
}
console.log(i, total);
