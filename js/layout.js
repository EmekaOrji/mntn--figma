const nav = document.querySelectorAll(".page-nav a");
const pagePart = document.querySelectorAll("#hero, .main-content [id]");
nav.forEach((e, i) => window.addEventListener("keydown", (key) => {
  if (key.key == i) {
    nav.forEach(e => e.classList.remove("active"));
    e.classList.add("active");
    pagePart[i].scrollIntoView();
  }
}));
nav.forEach((e, i) => e.addEventListener("click", () => {
  nav.forEach(e => e.classList.remove("active"));
  e.classList.add("active");
  pagePart[i].scrollIntoView();
}));
["load", "scroll"].forEach(event => {
  document.addEventListener(event, () => {
    pagePart.forEach((e, i) => {
      if (isVisible(e)) {
        nav.forEach(e => e.classList.remove("active"));
        nav[i].classList.add("active");
      }
    })
  });
});

function isVisible (ele) {
  const { top, bottom } = ele.getBoundingClientRect();
  const vHeight = (window.innerHeight || document.documentElement.clientHeight);

  return (
    (top > 0 || bottom > 0) &&
    top < vHeight / 2
  );
}

// PARALLAX SCROLLING STARTS
const hero = document.getElementById("hero");
const header = document.querySelector("header");
const heroText = document.querySelector(".hero_description");
const heroBG1 = document.querySelector(".bg-layer-1 img");
const heroBG4 = document.querySelector(".bg-layer-4 img");

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  if (value > 1100) {
    value = 0;
  }
  header.style.top = `${value / 1.08}px`;
  if (value > 350) {
    header.style.top = 0;
  }
  heroBG1.style.top = `-${value / 3}px`;
  heroBG4.style.left = `-${value / 5.5}px`;
  heroText.style.transform = `translateY(${value / 1.5}px)`;
});
// PARALLAX SCROLLING ENDS

// SCROLL REVEAL STARTS
ScrollReveal().reveal('.guide_description', { duration: 1000, distance: '500px' });
ScrollReveal().reveal('.guide_image', { delay: 500, duration: 1000, distance: '500px' });
// SCROLL REVEAL ENDS