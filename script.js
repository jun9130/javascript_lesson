let input = document.getElementById('input').textContent;
console.log(typeof input);
input = Number(input);
console.log(typeof input);

document.getElementById('output').textContent = input + 1000