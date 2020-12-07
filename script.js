// const button = document.querySelector('button');
// button.addEventListener('click', ()=> {
//   const form = button.insertAdjacentHTML('afterend','<form action=""><textarea name="" id="" cols="30" rows="5" placeholder="レビューを書いてください" ></textarea><input type="submit"></form>');
  
// }, { once: true}); 

const weather = ["晴れ", "曇り", "雨", "雪"];

for (let i = 0; i < weather.length; i++) {
  let li = document.createElement('li');
  li.textContent = weather[i];
  document.getElementById('number').appendChild(li);
};

