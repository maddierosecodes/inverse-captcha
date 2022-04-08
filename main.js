const fs = require('fs');

const data = fs.readFileSync('./input.txt', 'utf-8');
const data2 = fs.readFileSync('./input2.txt', 'utf-8');

function inverseCaptcha(num) {
  let count = 0;
  let limit = num.length;
  let step = 1;
  num.split('').forEach((number, i) => {
    let index = i + step;
    if (index >= limit) index -= limit;
    if (number === num[index]) {
      count += Number(number);
    }
  });
  return count;
}
 console.log(inverseCaptcha(data));

function inverseCaptcha2(num) {
  let count = 0;
  let limit = num.length;
  let step = Math.floor(limit / 2);
  num.split('').forEach((number, i) => {
    let index = i + step;
    if (index >= limit) index -= limit;
    if (number === num[index]) {
      count += Number(number);
    }
  });
  return count;
}
console.log(inverseCaptcha2(data2));
