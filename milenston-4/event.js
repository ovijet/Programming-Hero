function getRed() {
  document.body.style.backgroundColor = "blue";
}

let btn = document.getElementById("getRed");
btn.addEventListener("mouseout", function () {
  document.body.style.backgroundColor = "red";
  document.body.style.color = "white";
});

let click = document.getElementById("name");
click.addEventListener("click", function () {
  let nameChange = document.getElementById("change");
  nameChange.innerText = "i love you";
});

// name update

let btnName = document.getElementById("btn");
btnName.addEventListener("click", function () {
  //2
  let input = document.getElementById("input-name");
  let name = input.value;
  console.log(name);

  // 3
  let nameUpdate = document.getElementById("update");
  nameUpdate.innerText=name;
});
