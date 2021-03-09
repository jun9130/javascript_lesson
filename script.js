const tax = 1.1

function calculation(price) {
  return Math.floor( price * tax);
}

console.log(calculation(120));