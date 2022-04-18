const upBtn = document.querySelector("#up");

upBtn.addEventListener("click", count);

function count() {
  setTimeout(() => {
    window.scrollTo({
      top: 100,
      behavior: "smooth",
    });
  }, 1500);
}
