const mainImage = document.getElementById('mainImage');
const otherImage = document.querySelectorAll('.otherImage');


otherImage.forEach(function(item, index) {
  item.addEventListener('click', function() {
    mainImage.src = this.src;
  })
});
