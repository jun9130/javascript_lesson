// const button = document.querySelector('button');
// button.addEventListener('click', ()=> {
//   const form = button.insertAdjacentHTML('afterend','<form action=""><textarea name="" id="" cols="30" rows="5" placeholder="レビューを書いてください" ></textarea><input type="submit"></form>');
  
// }, { once: true}); 

 document.getElementById('modalOpen').addEventListener('click', function(){
  document.getElementById('modal').classList.add("modalActive")
  document.getElementById('mask').classList.add("maskActive")
 });

 document.getElementById('modalClose').addEventListener('click', function(){
  document.getElementById('modal').classList.remove("modalActive")
  document.getElementById('mask').classList.remove("maskActive")
 });