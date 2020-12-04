const addButton = window.document.getElementById('addButton');
addButton.addEventListener('click', ()=> {  //アロー関数
  const input = window.document.querySelector('input'); //input要素取得
  const li = window.document.createElement('li'); //liタグ作成
  const ul = window.document.querySelector('ul'); //ul要素取得
  li.textContent = input.value; //入力されたテキストをliのテキストに反映
  ul.appendChild(li); //ulタグの最後に追加
  
});
