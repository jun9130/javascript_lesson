const addButton = document.getElementById('addButton');

addButton.addEventListener('click', ()=> {
  const input = document.querySelector('input');
  const ul = document.querySelector('ul');
  const li = document.createElement('li'); //liタグ作成

  li.textContent = input.value;
})

// const doneTodo = document.querySelector('input[value="task"]')
// doneTodo.addEventListener('change', ()=>{
//   if (doneTodo.checked) {
//     console.log('ok');
//   }
// })

// addButton.addEventListener('click', ()=> {  
//   const input = window.document.querySelector('input'); //input要素取得
//   const ul = window.document.querySelector('ul'); //ul要素取得

//   const li = window.document.createElement('li'); //liタグ作成
//   li.textContent = input.value; //入力されたテキストをliのテキストに反映
//   ul.appendChild(li); //ulタグの最後に追加
//   input.value = ""; //inputの中を空に

//   const doneButton = window.document.createElement('button'); //buttonタグ作成
//   doneButton.textContent = "完了"; //「完了」のテキスト追加
//   doneButton.classList.add("doneButton")
//   li.appendChild(doneButton); //liタグの末尾に追加

//   const deleteButton = window.document.createElement('button');
//   deleteButton.textContent = "削除";
//   deleteButton.classList.add("deleteButton");
//   li.appendChild(deleteButton);

//   doneButton.addEventListener('click', ()=> {
//     li.classList.add("done"); //liタグにdoクラスを追加
//   });

//   deleteButton.addEventListener('click', ()=> {
//     li.style.display = "none" ;
//   });

// });
