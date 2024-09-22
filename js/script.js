window.addEventListener("load", () =>
  document.querySelector(".preloader").classList.add("hidePreloader")
);

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if ((window, scrollY > 200)) {
    toTop.classList.add("scroll-top");
  } else {
    toTop.classList.remove("scroll-top");
  }
});
