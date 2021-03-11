function sayHello(name) {
  return `hello ${name}`;
}

const result = sayHello("taro");
console.log(result);



function showHello() {
  console.log('Hello');
}

const result2 =  showHello();
console.log(result2); //showHello()関数内にreturnがないためundefined


function Hello() {
  return; //returnのみもundefined
}

const result3 =  Hello();
console.log(result3); 
