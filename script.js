const emptyArray = [];
const numbers = [1, 2, 3];
//配列の配列
const matrix = [
  ['a', 'b'],
  ['c', 'd']
];

window.document.write(numbers[0]);
console.log(matrix[0]);
console.log(matrix[0][0]);

const array = ["one", "two", "three"];
console.log(array.length); //要素の数取得
console.log(array[array.length - 1]); //要素の数 - 1 = 最後の要素


//分割代入
const num = [1, 2, 3];
const [one, two, three] = num;
console.log(three);

