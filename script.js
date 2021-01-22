// const button = document.querySelector('button');
// button.addEventListener('click', ()=> {
//   const form = button.insertAdjacentHTML('afterend','<form action=""><textarea name="" id="" cols="30" rows="5" placeholder="レビューを書いてください" ></textarea><input type="submit"></form>');
  
// }, { once: true}); 

//配列
const weather = ["晴れ", "曇り", "雨"];
weather.push("雪");

document.getElementById("test").textContent = "今日の天気は" + weather[3];