function double(num) {
  return num * 2;
}

console.log(double(10))


const array = [1, 2, 3];

const doubleArray = array.map(function(value) {
    return value * 2; 
});
console.log(doubleArray); 