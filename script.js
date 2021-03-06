const date = document.getElementById('date');
const today = new Date();
console.log(today);
date.textContent = today.setDate(0);


const day = new Date(2021, 5 - 1, 11);
console.log(day);
console.log(day.setDate(32));
