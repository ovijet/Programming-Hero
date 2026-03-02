// let obj = {
//   name: "ovi",
//   age: 23,
//   dateOfBirth: "28/07/2002",
//   isRice: false,
// };

// let json = JSON.stringify(obj);
// console.log(json);
// let js = JSON.parse(json);
// console.log(js, typeof js);

let dataLode = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((value) => value.json())
    .then((data) => console.log(data));
};

const url = "https://jsonplaceholder.typicode.com/posts";

let lodePost = () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => display(data));
};

let display = (lode) => {
  //1get the container
  let post = document.getElementById("post");
  post.innerHTML = "";
  lode.forEach((element) => {
    let postcard = document.createElement("div");
    postcard.innerHTML = `
    <div class="card">
        <h1>title</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur
          voluptatem distinctio labore quibusdam omnis officia placeat est,
          commodi quia alias.
        </p>
      </div>
    
    `;
    post.append(postcard);
  });
};
