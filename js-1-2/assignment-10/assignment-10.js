let dice = Number(prompt("Enter the number of dice: "));
let wantedSum = Number(prompt("Enter the sum of the dice: "));

let successfulRolls= 0;
let repetitions= 10000;


for (let i = 0; i < repetitions; i++) {
    let sum = 0;

    for (let j = 0; j < dice; j++) {
        let roll = Math.floor(Math.random() * 6) + 1;
        sum += roll;
    }

    if (sum === wantedSum) {
        successfulRolls++;
    }
}

let probability = (successfulRolls / repetitions) * 100;

document.getElementById("target").textContent = "Probability to get sum " + wantedSum + " with " + dice + " dice is " + probability.toFixed(2) + "%";