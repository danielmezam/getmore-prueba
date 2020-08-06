window.addEventListener("scroll", function(e) {
  var header = document.getElementById("header");
  var sticky = window.scrollY;

  if (sticky >= 20) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});
