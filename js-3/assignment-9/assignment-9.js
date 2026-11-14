
'use strict';

function even(numbers) {
  const evens = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evens.push(numbers[i]);
    }
  }
  return evens;
}


const originalArray = [2, 7, 4, 9, 12];
const evenArray = even(originalArray);

console.log(originalArray);
console.log(evenArray);