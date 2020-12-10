// const button = document.querySelector('button');
// button.addEventListener('click', ()=> {
//   const form = button.insertAdjacentHTML('afterend','<form action=""><textarea name="" id="" cols="30" rows="5" placeholder="レビューを書いてください" ></textarea><input type="submit"></form>');
  
// }, { once: true}); 

// const tabs = document.querySelectorAll(".tabs li a");
// const contents = document.querySelectorAll(".contents li");

// console.log(tabs);
// console.log(contents);

// for (let i = 0; i < tabs.length; i++) {
//   tabs[i].addEventListener('click', function(e){
//     e.preventDefault();
//   for(let j = 0; j < tabs.length; j++) {
//     tabs[j].classList.remove("active");
//   } 
//   for(let j = 0; j < contents.length; j++) {
//     contents[j].classList.remove("active");
//   } 
//     this.classList.add('active')
//     contents[i].classList.add('active');
//   }); 
// }

const score = 10;

if (score === 20) {
  document.getElementById("test").textContent = "scoreは20です。";

} else if (score === 10) {
  document.getElementById("test").textContent = "scoreは10です。";
}else {
  document.getElementById("test").textContent = "scoreは20でも10ではありません";
}