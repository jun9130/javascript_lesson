//配列の追加
const array =['A', 'B', 'C'];
array.push('D');
console.log(array);

const poppedItem = array.pop();
console.log(poppedItem);
console.log(array);

//反復
const num = [1, 2, 3];
num.forEach((currentValue, index, array) => {
  console.log(currentValue, index, array);
});