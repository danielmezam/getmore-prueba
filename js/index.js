let index = 1;
showSlides(index);

const nextSlide = n => {
  showSlides((index += n));
};

const thisSlide = n => {
  showSlides((index = n));
};
setInterval(function time() {
  showSlides((index += 1));
}, 4000);
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carousel-item");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    index = 1;
  }
  if (n < 1) {
    index = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[index - 1].style.display = "block";
  dots[index - 1].className += " active";
}
