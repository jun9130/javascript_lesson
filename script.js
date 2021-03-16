const input = document.querySelector('input');
const button = document.querySelectorAll('button');

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', function(){
    input.value += String(button[i].textContent);
  });
}