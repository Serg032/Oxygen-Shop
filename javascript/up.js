const upBtn = document.querySelector("#up");

upBtn.addEventListener("click", count);

function count() {
  setTimeout(() => {
    window.scrollTo(pageXOffset, 0);
  }, 1500);
}
