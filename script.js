const btn = document.getElementById('btn');
const text = document.getElementById('text')

btn.addEventListener('click', function(){
  text.style.color='red';
  text.innerHTML = "クリックされました";
  const input = window.document.getElementById('input');
  input.value = "書き換え"
});

