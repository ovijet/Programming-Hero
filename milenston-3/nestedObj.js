const person = {
  name: "ovi",
  event: ["14feb", "21feb", "28feb"],
  address: ["noapara avoynogor jessore"],
  love: {
    gfName: "payel biswas",
    age: 16,
    address: "echamoti village",
  },
};
const gfAddress = person.love.address;
console.log(gfAddress);

person.event[1] = "16december";
const pro = person.event;
console.log(pro[1]);
