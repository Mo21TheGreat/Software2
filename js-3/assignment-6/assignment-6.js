'use strict';

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

const targetList = document.getElementById('target');
let roll;

do {
  roll = rollDice();
  const listItem = document.createElement('li');
  listItem.textContent = roll;
  targetList.appendChild(listItem);
} while (roll !== 6);