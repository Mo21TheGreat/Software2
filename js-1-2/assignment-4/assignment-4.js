let name = prompt("What's your name?")
let number = Math.floor(Math.random() * 4) + 1
if (number == 1){
    document.getElementById("target").textContent = name + ", you are Gryffindor."
}
else if (number == 2){
    document.getElementById("target").textContent = name + ", you are Hufflepuff."
}
else if (number == 3){
    document.getElementById("target").textContent = name + ", you are Slytherin."
}
else if (number == 4){
    document.getElementById("target").textContent = name + ", you are Ravenclaw."
}