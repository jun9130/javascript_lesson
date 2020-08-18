//インデックスの取得
const pro = ['ruby', 'PHP', 'JavaScript', 'Go'];
const indexOfJS = pro.indexOf('JavaScript');
document.write(`配列の${indexOfJS + 1}番目には${pro[2]}が入っています`);

//条件に一致する要素の取得
const colors = [
  {color: "red"},
  {color: "blue"},
  {color: "yellow"}
];
const blueColor = colors.find((obj) => {
  return obj.color === "blue";
});
console.log(blueColor);

//指定範囲の要素を取得
const array =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
console.log(array.slice(1, 4));
console.log(array.slice(1));
console.log(array.slice(-1));
console.log(array.slice(4, 1));