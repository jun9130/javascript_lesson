const TargetElement = document.querySelectorAll(".animationTarget");
console.log("画面の高さ", window.innerHeight)


document.addEventListener("scroll",function() {
  for (let i = 0; i < TargetElement.length; i++) {
    const getElentDistance = TargetElement[i].getBoundingClientRect().top + TargetElement[i].clientHeight + .5
    if (window.innerHeight > getElentDistance) {
      TargetElement[i].classList.add("show");
    }
  }
  });
