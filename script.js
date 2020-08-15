//while文
let x = 0;
console.log(`${x}です。`);
while (x < 10) {
  console.log(x);
  x += 1;
}
console.log('ループ終了です');

//for文
let total = 0;
for (let i = 0; i < 5; i++) {
  total += i + 1;
}
console.log(total)

//forEachメソッド
const array = [1, 2, 3];
array.forEach(currentValue => {
    console.log(currentValue);
});