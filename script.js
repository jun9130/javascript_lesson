const btn = document.getElementById('btn');

btn.addEventListener('click', function(){
  const newDiv = document.createElement("div");
  const newText = document.createTextNode('クリックで追加');
  newDiv.appendChild(newText);
  btn.parentElement.insertBefore(newDiv, btn.nextSibling);
});