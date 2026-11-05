let answer = confirm("Should I calculate the square root? ");

if(answer === true) {
    let number = Number(prompt("Enter a number: "));

    if(number < 0) {
        document.getElementById("target").textContent =
        "The square root of a negative number is not defined";

    }else{
        let target = Math.sqrt(number);

        document.getElementById("target").textContent =
        "The square root is " + target;
    }

}else{
    document.getElementById("target").textContent =
    "The square root is not calculated."
}