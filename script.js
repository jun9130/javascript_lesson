//プロトタイプオブジェクト
const obj = {}; //作成時にObject.prototype`に定義されたものを継承
console.log(obj.toString === Object.prototype.toString); //=>trueになる


//
const array = ['PHP', 'Ruby', 'JavaScript'];
if (array.includes('JavaScript')) {
  window.document.write(`配列に${array[2]}は含まれている`);
}