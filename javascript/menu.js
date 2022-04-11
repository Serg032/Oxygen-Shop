const menu = document.querySelector(".links");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  menu.classList.toggle("active");
});
