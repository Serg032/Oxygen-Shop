import { showPopUp } from "./subscribe.js";

let bar = document.querySelector("#progress");

window.addEventListener("scroll", () => {
  const max = document.body.scrollHeight - innerHeight;
  const percentage = (window.pageYOffset / max) * 100;
  bar.style.width = `${percentage}%`;
  if (percentage >= 25 && percentage < 27) {
    showPopUp();
    console.log("scrolling to 25");
  }
});
