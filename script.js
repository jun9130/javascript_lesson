const array1 = [1, 4, 9, 16];

const map1 = array1.map(x => x * 2);

console.log(map1)


const map2 = array1.map(function(x) {
  return x * 2
});

console.log(map2);



const fruits = ["apple", "melon", "banana", "lemon"];
const filter1 = fruits.filter(word => word.match(/[a]/));

console.log("aの文字が入っているfruits", filter1);