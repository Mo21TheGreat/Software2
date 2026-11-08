const dogs = [];

for (let i = 0; i < 6; i++) {
    const name = prompt(`Enter the name of dog ${i + 1}:`);
    dogs.push(name);
}

dogs.sort();
dogs.reverse();

const targetList = document.getElementById('target');

for (let i = 0; i < dogs.length; i++) {
    const li = document.createElement('li');
    li.textContent = dogs[i];
    targetList.appendChild(li);
}
