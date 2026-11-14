let answer = confirm("Should I calculate the square root?")

if (answer === true) {
    let number = prompt("Enter a number: ")
    
    if (number >= 0) {
        let squareRoot = Math.sqrt(number)
        document.getElementById("target").textContent = "The square root is " + squareRoot

    }
    else{
        document.getElementById("target").textContent = "The square root of a negative number is not defined"
    }

}
else {
    document.getElementById("target").textContent = "The square root is not calculated."
}