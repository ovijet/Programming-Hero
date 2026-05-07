const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Hell");
});

const users = [
  { id: 1, name: "John", email: "john@example.com" },
  { id: 2, name: "Jane", email: "jane@example.com" },
  { id: 3, name: "Bob", email: "bob@example.com" },
];

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/about", (req, res) => {
  res.send("This is a simple Express server");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
