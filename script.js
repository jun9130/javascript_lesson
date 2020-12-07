// const button = document.querySelector('button');
// button.addEventListener('click', ()=> {
//   const form = button.insertAdjacentHTML('afterend','<form action=""><textarea name="" id="" cols="30" rows="5" placeholder="レビューを書いてください" ></textarea><input type="submit"></form>');
  
// }, { once: true}); 

const testElement = document.getElementById('test')


testElement.addEventListener('click', function(){
  this.textContent = "テストがクリックされました";
  alert("テストがクリックされました");
});