// const button = document.querySelector('button');
// button.addEventListener('click', ()=> {
//   const form = button.insertAdjacentHTML('afterend','<form action=""><textarea name="" id="" cols="30" rows="5" placeholder="レビューを書いてください" ></textarea><input type="submit"></form>');
  
// }, { once: true}); 

//.fooを配列で取得
const classes = document.getElementsByClassName('foo');
for (const classNode of classes) {
  console.log(classNode.innerText);
}


const forms = document.forms.demoForm;
const title = forms.title.value;
console.log(title);