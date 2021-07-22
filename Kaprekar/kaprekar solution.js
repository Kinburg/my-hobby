function kaprekar(start, fin, print = false) {
  if (start > 0 && start < fin) {
    let totalNumbers = 0;
    for (let i = start; i < fin; i++) {
      const qube = Math.pow(i, 2);
      const sum = strSum(qube.toString(), i);

      if (sum) {
        if (print) {
          totalNumbers++;
          console.log(`Kaprekar number: ${sum.sum}\n\tProofes:\n\t\t${sum.sum}^2=${qube}\n\t\t${sum.num1}+${sum.num2}=${sum.sum}`);
        }
      }
    }
    if (print) {
      console.log(`\n----------------------------------------Statistic-----------------------------------------`);
      console.log(`TOTAL KAPREKAR NUMBERS: ${totalNumbers}\n`);
    }
  } else {
    throw new Error('Invalid range')
  }
}

function strSum(str, number) {
  for (let i = 0; i < str.length; i++) {
    if (i < number.toString().length) {
      const parts = sliceToNumbers(str, i, number);
      const sum = parts.n1 + parts.n2;
      operations++;
      if (sum === number) {
        return { sum, num1: parts.n1, num2: parts.n2, qube: parseInt(str) };
      }
    }
  }
}

function sliceToNumbers(str, razr1, number) {
  const forSum = {n1: '', n2: ''};
  
  for (let i = 0; i < str.length; i++) {
      if (i <= razr1) {
      operations++;
      forSum.n1 += str[i];
    } else if (forSum.n2 === '' || parseInt(forSum.n2)<=number){
        operations++;
        forSum.n2 += str[i];
      }
    }
  
  forSum.n1 = parseInt(forSum.n1);
  forSum.n2 = parseInt(forSum.n2);
  
  return forSum;
}

const runs = 10;
const startD = 9;
const endD = 10000;

let timeSum = 0;
let timeMin = 0;
let timeMax = 0;
let operations = 0;
for (let i = 0; i<runs; i++) {
  var start = new Date().getTime();
  operations = 0;
  kaprekar(startD, endD, i === 0);
  var end = new Date().getTime();
  var time = end - start;
  timeSum += time;
  if (i === 0 || time < timeMin) {
    timeMin = time;
  }
  if (time > timeMax) {
    timeMax = time;
  }
  console.log(`Run ${i+1}: ${time} milliseconds.`)
}

console.log(`\n\n==============================================================================================\nAverage search time for all Kaprekar numbers in ${startD}-${endD} diapason after ${runs} runs is: ${timeSum/runs} ms. \nMin time: ${timeMin} ms\nMax time: ${timeMax} ms.\nOperations per run: ${operations}\n==============================================================================================`);
console.log(`\n----------------------------------------------------------------------------------------------`);


/*TOTAL KAPREKAR NUMBERS: 58
Run 1: 12553 milliseconds.
  Run 2: 12505 milliseconds.
  Run 3: 12416 milliseconds.
  Run 4: 12364 milliseconds.
  Run 5: 12355 milliseconds.
  Run 6: 12395 milliseconds.
  Run 7: 12367 milliseconds.
  Run 8: 12418 milliseconds.
  Run 9: 12437 milliseconds.
  Run 10: 12405 milliseconds.
  Average search time for all Kaprekar numbers in 1-1000000 diapasone after 10 runs is: 12421.5 ms.
  Min time: 12355 ms
Max time: 12553 ms.
  Operations per run: 63685018*/
