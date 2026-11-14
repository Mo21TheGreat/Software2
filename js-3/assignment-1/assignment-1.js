let numbers = [];

for (let i = 0; i < 5; i++) {
    let input = prompt(`Enter number ${i + 1} of 5:`);
    numbers.push(Number(input));
}

let reversedOutput = [];
for (let i = numbers.length - 1; i >= 0; i--) {
    reversedOutput.push(numbers[i]);
}

console.log(reversedOutput.join(", "));