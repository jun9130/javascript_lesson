// function 高階関数(コールバック関数) {
//   コールバック関数();
// }

function confirmed(fn)  {
  const input = window.prompt("実行しますか?");
  fn(input);
}

confirmed(function (input) {
  console.log(input);
})