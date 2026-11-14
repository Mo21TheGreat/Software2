const numbers = [];

while (true) {
    const input = prompt("Enter a number (0 to stop):");
    const number = Number(input);

    if (number === 0) {
        break;
    }

    numbers.push(number);
}

numbers.sort((a, b) => b - a);

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
