const input = document.querySelector('input');
const button = document.querySelectorAll('button.number');
const clear = document.getElementById('clear');
const calculation = document.getElementById('calculation');


for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', function(){
    input.value += button[i].textContent;
  });
}

clear.addEventListener('click', function(){
  input.value = " ";
})

calculation.addEventListener('click', function(){
  const inputData = input.value
  const result = new Function( 'return ' + inputData )
  input.value = result().toString()
});

