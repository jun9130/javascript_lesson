const date = document.getElementById('date');
const today = new Date();
console.log(today);
date.textContent = today.setDate(32);


n = 3
console.log(typeof n);

const day = new Date(2021, n - 1, 3);
console.log(day);
console.log(day.setDate(32));
