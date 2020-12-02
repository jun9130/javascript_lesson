const buttonList = document.querySelectorAll('button');
[...buttonList].forEach((button) => {
  button.addEventListener('click', ()=> {
    const li = button.closest('li');
    li.classList.add('done');
  })
});

// const li = document.querySelector('li');
// button.addEventListener('click', () => {
//   li.classList.add('done');
// });