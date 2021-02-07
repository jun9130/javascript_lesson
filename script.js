const modalOpen = document.getElementById("modalOpen");
const modalClose = document.getElementById("modalClose");


modalOpen.addEventListener("click", (e)=> {
  e.preventDefault()
  document.getElementById("modal").classList.add("active");
  document.getElementById("mask").classList.add("active");
});

modalClose.addEventListener("click", (e)=> {
  e.preventDefault()
  document.getElementById("modal").classList.remove("active");
  document.getElementById("mask").classList.remove("active");
})
