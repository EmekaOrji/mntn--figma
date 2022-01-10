const nav = document.querySelectorAll(".page-nav a");
const pagePart = document.querySelectorAll("#hero, .main-content [id]");
pagePart.forEach(e => console.log(e));
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