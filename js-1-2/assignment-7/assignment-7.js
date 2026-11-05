let times = Number(prompt("Enter the number of rolls: "));

let sum = 0;

for (let i = 0; i < times; i++) {
    let dice = Math.floor(Math.random()* 6) + 1;

    sum += dice;

}

document.getElementById("result").textContent=
    "The sum of your dice rolls is: " + sum;