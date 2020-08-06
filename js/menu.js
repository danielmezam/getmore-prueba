let btn = document.getElementById("menuBtn");
let closebtn = document.getElementById("closeBtn");
let nav = document.getElementById("navigation");
const openMenu = () => {
  nav.style.right = "0";
  nav.style.top = "0";
  nav.style.bottom = "0";
};
const closeMenu = () => {
  nav.style.right = "-100%";
};

btn.addEventListener("click", openMenu);
closebtn.addEventListener("click", closeMenu);
