document.getElementById('button').addEventListener('click', function(){
  const number = document.getElementById("number");
  number.innerHTML = Number(number.innerHTML) + 1
}, {once : true})