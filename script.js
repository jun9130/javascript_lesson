const input = document.querySelector('input');
const button = document.querySelector('button');
const div = document.querySelector('div');

button.addEventListener('click', function(){
  taxIncluded = Math.floor(Number(input.value) * 1.1);
  const p = document.createElement("p");
  p.innerHTML = `${input.value}円の税込は${taxIncluded}円です。`;
  input.value = ""
  div.appendChild(p);
})
