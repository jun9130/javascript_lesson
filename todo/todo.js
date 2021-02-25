const addButton = document.getElementById('addButton');

addButton.addEventListener('click', ()=> {
  const input = document.querySelector('input');
  if (input.value != "") {
    const ul = document.querySelector('ul');
  
    const li = document.createElement('li');
    li.classList.add('todo');
    
    const checkBox = document.createElement('input');
    checkBox.setAttribute('type','checkbox');
    
    const task = document.createElement('span');
    task.classList.add('todo-task');
    task.textContent = input.value;
    
    const deleteButton = document.createElement('button'); 
    deleteButton.textContent = "削除";
    
    ul.appendChild(li);
    li.append(checkBox, task, deleteButton);
    input.value = "";

    checkBox.addEventListener('change', ()=> {
      if (checkBox.checked) {
        task.classList.add('doneTodo');
      }
      else {
        task.classList.remove('doneTodo');
      }
    })

    deleteButton.addEventListener('click', ()=> {
      li.style.display = "none" ;
    })
  }
  else {
    alert("タスクを入力してください");
  }
})