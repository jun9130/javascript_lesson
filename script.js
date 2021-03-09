//return アウトプットと処理を終了
function sayHello(name) {
  return `Hello ${name}`;
}
const result2 = sayHello("taro");
console.log(result2);



function showHello() {
  console.log('Hello')
}
const result = showHello();
console.log(result); //=> returnがないのでundefined


function showHello2() {
  console.log('実行される');
  return 'returnここで終了';
  console.log('実行されない');
}

const result3 = showHello2();
console.log(result3);