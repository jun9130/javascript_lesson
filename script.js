// const button = document.querySelector('button');
// button.addEventListener('click', ()=> {
//   const form = button.insertAdjacentHTML('afterend','<form action=""><textarea name="" id="" cols="30" rows="5" placeholder="レビューを書いてください" ></textarea><input type="submit"></form>');
  
// }, { once: true}); 

const tax = 1.1;



function insertText(itemPrice, element) {
  function calculation(price) {
    return Math.floor(price * tax);
  }

  document.getElementById(element).textContent = `${itemPrice}円の商品の税込価格は${calculation(itemPrice)}円です。`
}

insertText(100, "result");
insertText(300, "result2");