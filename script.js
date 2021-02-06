fruits = ["みかん", "いちご", "りんご", "ぶどう", "ばなな"]
const fruitsList = document.getElementById('box')


//for
for (let i = 0; i < fruits.length; i++) {
  const li = document.createElement('li');
  li.textContent = fruits[i];
  fruitsList.appendChild(li);
}


//forEach
fruits.forEach((fruit) => {
  const li = document.createElement('li');
  li.textContent = fruit;
  fruitsList.appendChild(li);
});