let year = prompt("Enter a year: ");

if (year % 4 === 0) {
    document.getElementById("result").textContent = year + " is a leap year.";
}else{
    document.getElementById("result").textContent = year + " is not a leap year.";
}
