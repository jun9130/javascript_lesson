function addNumber(a, b) {
  return a + b;
};

console.log(addNumber(1, 2));
console.log(addNumber(1, 2, 3));

//残余引数
function num(...args) {
  console.log(args);
}
num(1, 2, 3);

//Spread構文
function fn(x, y, z) {
  console.log(x);
  console.log(y);
  console.log(z);
}

const array =[1, 2, 3];
fn(...array);
