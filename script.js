// const buttonList = document.querySelectorAll('button');
// [...buttonList].forEach((button) => {
//   button.addEventListener('click', ()=> {
//     const li = button.closest('li');
//     li.classList.add('done');
//   })
// });

const button = document.querySelector('button');
button.addEventListener('click', ()=> {
  const div = document.querySelector('div');
  div.classList.add('change');
})