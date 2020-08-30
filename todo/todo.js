const btn = document.getElementById('btn');

btn.addEventListener('click', function(){
  const text = document.getElementById('text');
  const newDiv = document.createElement("div");
  const text = document.getElementById('text');
  const newText = document.createTextNode('クリックで追加');
  newDiv.appendChild(newText);
  btn.parentElement.insertBefore(newDiv, btn.nextSibling);
});

const inputText = document.getElementById('inputText');
console.log(inputText.value);