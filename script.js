// const button = document.querySelector('button');
// button.addEventListener('click', ()=> {
//   const form = button.insertAdjacentHTML('afterend','<form action=""><textarea name="" id="" cols="30" rows="5" placeholder="レビューを書いてください" ></textarea><input type="submit"></form>');
  
// }, { once: true}); 

const alphabet = ["b", "c", "a"];
console.log(alphabet.sort());


let numbers = [11, 3, 7, 99, 1022, 34];
//アロー関数 昇順
numbers.sort((a, b)=> a - b);
console.log(numbers);

let numbers2 = [23, 593, 4, 2351, 9, 13, 89, 56];
//アロー関数 降順
numbers.sort((a, b) => b - a);
console.log(numbers);