// let btnU=document.getElementById('btn')
// btnU.addEventListener('click', function(){
//     let update=document.getElementById('change')
//     update.innerText='payel'
// })

// input
let btnA = document.getElementById("btn");
btnA.addEventListener("click", function () {
  let inputField = document.getElementById("input-text");
  let name = inputField.value;
  let nmm = document.getElementById("nm");
  nmm.innerText = name;
});
