function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let male = 0;
let female = 0;

for (let i = 0; i < 10000; i++) {
  while (getRandomInt(2) !== 1) {
    female++;
  }
  male++;
}

console.log(`Males: ${male}\nFemales: ${female}`);