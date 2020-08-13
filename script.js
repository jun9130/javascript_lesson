//分割代入
const array = [1, 2];
const [a, b] = array;
console.log(array[0]);

const obj = {
  key: "value"
};
//オブジェクトの生成は{ }で囲む
const { key } = obj;
console.log(key);

console.log(1 === '1');
console.log(1 == '1'); // 暗黙的な型変換 等価演算子(==)は推奨しない

console.log(String("str"));