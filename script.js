const button = document.querySelector('button');
const li = document.querySelector('li');
button.addEventListener('click', () => {
  li.classList.add('done');
});