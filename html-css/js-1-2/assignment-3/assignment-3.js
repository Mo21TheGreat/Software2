let n1 = prompt("Enter the first number: ");
let n2 = prompt("Enter the second number: ");
let n3 = prompt("Enter the third number: ");



document.getElementById("sum").textContent = "Sum: " + (Number(n1) + Number(n2) + Number(n3));
document.getElementById("product").textContent = "Product: " + (Number(n1) * Number(n2) * Number(n3));
document.getElementById("average").textContent = "Average: " + ((Number(n1) + Number(n2) + Number(n3))/3);