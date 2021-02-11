window.addEventListener("scroll", function() {
  let scroll = document.documentElement.scrollTop;
  document.getElementById("scrollValue").textContent = scroll;

  if(scroll > 1600 ) {
    document.querySelector("main").classList.add("test");
  } else {
    document.querySelector("main").classList.remove("test");

  }
});