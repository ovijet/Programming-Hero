//function declaration

function add(nam1, nam2) {
  return nam1 + nam2;
}
console.log(add(5, 10));

//function expretion
let add2 = function (add1, add2) {
  return add1 + add2;
};

console.log(add2(10, 20));

// arrow function

let add3 = (ovi1, ovi2) => ovi1 + ovi2;
console.log(add3(30, 40));

let milti = (p, q) => p - q;
console.log(milti(10,5));
