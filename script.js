// function tax(number) {
//   return Math.floor(number * 1.1);
// }

// const tax = function tax(number) {
//   return Math.floor(number * 1.1);
// }

// アロー関数
// const tax = (number) => {
//   return Math.floor(number * 1.1);
// }

// document.getElementById('test').textContent = tax(1000);

// const multiplication = () => 5 * 20;
// console.log(multiplication());



// document.getElementById('test').addEventListener('click', function(){
//   this.textContent = 'クリックされました';
// })
// 書き換え
document.getElementById('test').addEventListener('click', () => {
  document.getElementById('test').textContent = 'クリックされました';
})