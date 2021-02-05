const animals = ['犬', '猫', '牛', '馬', 'うさぎ' ];
animalList = document.getElementById('animal');

// for (let i = 0; i < animals.length; i++) {
//   const li = document.createElement('li');
//   li.textContent = animals[i];
//   animalList.appendChild(li);
// };

animals.forEach((value, index, array) => {
  const li = document.createElement('li');
  li.textContent = `${index + 1}: ${value}`;
  animalList.appendChild(li);
  if (index + 1 === array.length) {
    const liElement = document.createElement('li')
    liElement.textContent = 'ループ終了!'
    animalList.appendChild(liElement);
  }
});