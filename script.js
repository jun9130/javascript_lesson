// console.log('test');
// setTimeout(function() {
//   console.log("test2");
//   setTimeout(function() {
//     console.log("test3")
//   })
// }, 3000);


//関数の場合
// function test() {
//   console.log("test");
// }
// setTimeout(test, 1000);

document.getElementById('test').addEventListener('click', function(){
  setTimeout(function() {
  document.getElementById('contents').style.display = 'block';
  }, 1000)
})