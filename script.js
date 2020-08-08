const str = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius facilis in molestiae';

// split()メソッド 指定した区切りで文字列を取り出す ex今回は半角スペースごと
const words = str.split(' ');
//forEach()メソッド 配列の要素を取り出す
words.forEach(element => console.log(element));


//   list: {
//     japansese: {
//       man: [
//         { name: "ヤマト", age: 20, teachProgramming() {} },
//         { name: "タケル", age: 32, teachHistory() {} },
//       ],
//       teach() {}
//     },
//     America: {
//       man: [ { name: "TOM" }, {name: "MIKE" } ],
//       makeSmile() {}
//     }
//   },
//   plan() {},
//   greeting() {}
// };

// window.console.log();
// window.alert();
// window.document.getElementById();


// 関数の例
// returnありの場合
// function isTweetable(text) {
//   return text.length <= 140;
// }

// console.log(isTweetable("foo"));

// returnなしの場合
// function alertTweetable(text) {
//   if (text.length <= 140) {
//     alert("you can tweet!");
//   }
// }
// alertTweetable("aaa")

// function number(a,b) {
//   const additionNumber = a + b;
//   return additionNumber;
// }
// console.log( number(13, 2));
