const addButton = window.document.getElementById('addButton');
addButton.addEventListener('click', ()=> {  //アロー関数
  const input = window.document.querySelector('input'); //input要素取得
  const ul = window.document.querySelector('ul'); //ul要素取得

  const li = window.document.createElement('li'); //liタグ作成
  li.textContent = input.value; //入力されたテキストをliのテキストに反映
  ul.appendChild(li); //ulタグの最後に追加

  const doneButton = window.document.createElement('button'); //buttonタグ作成
  doneButton.textContent = "完了"; //「完了」のテキスト追加
  li.appendChild(doneButton); //liタグの末尾に追加

  doneButton.addEventListener('click', ()=> {
    li.classList.add("do"); //liタグにdoクラスを追加
  });
});
