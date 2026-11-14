'use strict';

const numCandidates = parseInt(prompt("Enter the number of candidates:"));
const candidates = [];

for (let i = 0; i < numCandidates; i++) {
  const name = prompt(`Name for candidate ${i + 1}`);
  candidates.push({ name: name, votes: 0 });
}

const numVoters = parseInt(prompt("Enter the number of voters:"));

for (let i = 0; i < numVoters; i++) {
  const vote = prompt(`Voter ${i + 1}, who will you vote for?`);
  if (vote) {
    for (let j = 0; j < candidates.length; j++) {
      if (candidates[j].name.toLowerCase() === vote.toLowerCase()) {
        candidates[j].votes++;
        break;
      }
    }
  }
}

candidates.sort((a, b) => b.votes - a.votes);

console.log(`The winner is ${candidates[0].name} with ${candidates[0].votes} votes.`);
console.log("results:");
for (let i = 0; i < candidates.length; i++) {
  console.log(`${candidates[i].name}: ${candidates[i].votes} votes`);
}