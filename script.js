// const button = document.querySelector('button');
// button.addEventListener('click', ()=> {
//   const form = button.insertAdjacentHTML('afterend','<form action=""><textarea name="" id="" cols="30" rows="5" placeholder="レビューを書いてください" ></textarea><input type="submit"></form>');
  
// }, { once: true}); 

const selectElement = document.querySelector('.ice-cream');

selectElement.addEventListener('change', (event) => {
  const result = document.querySelector('.result');
  result.textContent = `You like ${event.target.value}`;
});