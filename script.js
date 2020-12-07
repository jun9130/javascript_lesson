// const button = document.querySelector('button');
// button.addEventListener('click', ()=> {
//   const form = button.insertAdjacentHTML('afterend','<form action=""><textarea name="" id="" cols="30" rows="5" placeholder="レビューを書いてください" ></textarea><input type="submit"></form>');
  
// }, { once: true}); 

const testButton = document.getElementById('test');

testButton.addEventListener('click', function(){
  // this.classList.toggle("test2");
  const listElment = document.querySelectorAll('.list li');
  for (let i = 0; i < listElment.length; i++) {
    listElment[i].classList.toggle("test");
  }
});
