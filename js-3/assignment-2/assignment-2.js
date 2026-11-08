'use strict';

const numParticipants = parseInt(prompt('Enter the number of participants:'), 10);

const participants = [];

for (let i = 0; i < numParticipants; i++) {
    const name = prompt(`Enter name of participant ${i + 1}:`);
    if (name) {
        participants.push(name);
    }
}


participants.sort();

const targetElement = document.getElementById('target');

for (let i = 0; i < participants.length; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = participants[i];
    targetElement.appendChild(listItem);
}