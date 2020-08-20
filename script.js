const btn = document.getElementById('btn');
const text = document.getElementById('text')

btn.addEventListener('click', function(){
  text.style.color='red';
  text.innerHTML = "クリックされました";
});