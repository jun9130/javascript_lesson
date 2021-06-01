const list = [1,2,3,4,5,6];
const newList = [];

list.forEach(function(item, index){
  newList[index] = item*item;
}

console.log(newList);