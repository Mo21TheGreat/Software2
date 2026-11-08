const numbers = [];

while (true) {
    const input = prompt("Enter a number:");
    const number = Number(input);

    if (numbers.includes(number)) {
        alert("The number has already been given.");
        break;
    }

    numbers.push(number);
}

numbers.sort((a, b) => a - b);

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
