'use strict';

function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

const sidesInput = prompt("Enter the number of sides on the dice:");
const sides = parseInt(sidesInput);

const targetList = document.getElementById('target');
let roll;

do {
  roll = rollDice(sides);
  const listItem = document.createElement('li');
  listItem.textContent = roll;
  targetList.appendChild(listItem);
} while (roll !== sides);