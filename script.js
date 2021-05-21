function add(a, b) {
  return a + b;
}

const test = add(2, 3);
console.log(test);

function argumentsToArray(x, y) {
  return [x, y];
}

console.log(argumentsToArray(1, 2)); 
console.log(argumentsToArray(1));