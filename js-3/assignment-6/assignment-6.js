function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

const targetList = document.getElementById('target');

while (true) {
    const roll = rollDice();
    
    const li = document.createElement('li');
    li.textContent = roll;
    targetList.appendChild(li);

    if (roll === 6) {
        break;
    }
}
