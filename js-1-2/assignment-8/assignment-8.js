let start= Number(prompt("Enter the starting year: "))
let end= Number(prompt("Enter the ending year: "))

for (let year = start; year <= end; year++) {

    if (year % 400 === 0) {
        
        document.getElementById("target").innerHTML +=
            "<li>" + year + "</li>";
    
    }else if (year % 100 === 0) {

        continue;
    
    }else if (year % 4 === 0) {

        document.getElementById("target").innerHTML +=
            "<li>" + year + "</li>";
    }

}