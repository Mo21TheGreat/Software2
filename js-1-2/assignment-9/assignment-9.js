let number = Number(prompt("Enter your number: "));

let isPrime = true;

if (number <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    document.getElementById("target").textContent = number + " is a prime number.";
} else {
    document.getElementById("target").textContent = number + " is not a prime number.";
}