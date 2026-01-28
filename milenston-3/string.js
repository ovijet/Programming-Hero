let book = `I Reading Books`;
let books = `i reading books`;
console.log(book);
console.log(book.toLocaleLowerCase());
console.log(book.toUpperCase());

if (book.toLocaleLowerCase() === books.toLocaleLowerCase()) {
  console.log("boi porila pass");
} else {
  console.log(`boi na porila fail`);
}
