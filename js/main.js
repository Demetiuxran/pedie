let header = document.querySelector("header");
let searchBtn = document.querySelector("header .icons .fa-search");
let searchForm = document.querySelector("#search-box");
let menuBtn = document.querySelector("#menu");
let navbar = document.querySelector(".navbar");

window.onscroll = () => {
  if (document.documentElement.scrollTop > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};

searchBtn.addEventListener("click", () => {
  searchForm.classList.toggle("active");
  searchBtn.classList.toggle("fa-times");
});

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});
