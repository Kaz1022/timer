// to create sound process.stdout.write('\x07');

//Confirm that our script can handle some common edge cases.

// No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.

// An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.

// An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.

// node timer1.js 10 3 5 15 9 
// This will make it beep at:

// 3 seconds
// 5 seconds
// 9 seconds
// 10 seconds
// 15 seconds

const seconds = process.argv.slice(2);
const secInOrder = seconds.sort(function(a, b){return a-b})
let onlyNums = [];

// sorting out all the numbers first, eliminating negatives, input that is not a number

for (let i = 0; i < secInOrder.length; i++) {
  if (secInOrder[i] > 0) {
    onlyNums.push(parseInt(secInOrder[i]))
  }
}

for (let i = 0; i < onlyNums.length; i++) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, onlyNums[i] * 1000);
}


//Simpler code  
// let alarms = process.argv.slice(2);
// let timer1 = (input) => {
//   for (const time of input) {
//     if (time > 0) {
//       setTimeout(() => {
//         process.stdout.write("\x07");
//       }, time * 1000);
//     }
//   }
// };

// timer1(alarms);