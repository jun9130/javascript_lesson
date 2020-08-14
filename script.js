//if文
// if (true) {
//   console.log('trueなので実行される')
// }

// const num = Number(prompt('1~99の数字を入れてください'));
// if (num < 50) {
//   document.write(`${num}は50より小さいです`);
// } else if (num < 100) {
//   document.write(`${num}は50以上で100未満です`);
// } else {
//   document.write("1~99の数字を入れてください");
// }


const year = new Date().getFullYear();
window.document.write(`${year}年`);