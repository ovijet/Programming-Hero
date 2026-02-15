function marketCalculator(pant, shart, shou) {
  let pantP = 500;
  let shartp = 300;
  let shouP = 1000;
  let pantM = pant * pantP;
  let shartM = shart * shartp;
  let shouM = shou * shouP;
  let total = pantM + shartM + shouM;
  return total;
}
let market = marketCalculator(2, 2, 1);
console.log(market);
