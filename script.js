const btn = document.getElementById('btn');

btn.addEventListener('click', function(){
  const newDiv = document.createElement("div");
  const newText = document.createTextNode('追加しました');
  newDiv.appendChild(newText);
  btn.parentElement.insertBefore(newDiv, btn.nextSibling);
});