console.log(document);

let info = document.getElementsByTagName("h1");
for (let ovi of info) {
  console.log(ovi.innerText);
}

let para = document.getElementsByTagName("p");
for (let pTag of para) {
  console.log(pTag.innerText);
}

let section = document.getElementById("class");
section.style.backgroundColor = "lightblue";
section.style.color = "white";

let paragrap = document.createElement("p");

paragrap.innerText = "i love you payel";

let pp = document.getElementById("class");
pp.appendChild(paragrap);
