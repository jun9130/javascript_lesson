const input = document.querySelector('input');
const button = document.querySelectorAll('button.number');
const clear = document.getElementById('clear');
const back = document.getElementById('back');
const calculation = document.getElementById('calculation');


for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', function(){
    input.value += button[i].textContent;
  });
  
}

clear.addEventListener('click', function(){
  input.value = " ";
})

back.addEventListener('click', function(){
  input.value = input.value.slice(0, input.value.length - 1); 
})

calculation.addEventListener('click', function(){
  const inputData = input.value
  const result = new Function( 'return ' + inputData )
  input.value = result().toString()
});



