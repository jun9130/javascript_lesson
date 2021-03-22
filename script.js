const canDrinkAlcohol = (age) => {
  if (age >= 20) {
    return true
  } 
    return false
}

console.log(canDrinkAlcohol(20));

const test = document.getElementById('test')
const select = document.getElementById('select');




const needUmbrella = (weather) => {
  if (weather === 'sunny') {
    return 'no'
  } else if (weather === 'cloudy') {
    return 'maybe'
  } else if (weather === 'rainy') {
    return 'yes'
  }
}

console.log(needUmbrella("rainy"));