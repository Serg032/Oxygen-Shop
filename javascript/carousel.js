// const photos = document.querySelectorAll("#photosSlider img");
// const btns = docum.querySelectorAll("#buttons button");

// buttons.forEach((button, index) =>
//   button.addEventListener("click", () => {
//     photos.forEach((photo) => (photo.style.display = "none"));
//     photos[index].style.display = "block";
//   })
// );
// photos
const photoOne = document.querySelector(".one");
const phototwo = document.querySelector(".two");
const photothree = document.querySelector(".three");
// buttons
const btnOne = document.querySelector(".btOne");
const btnTwo = document.querySelector(".btTwo");
const btnThree = document.querySelector(".btThree");

btnOne.addEventListener("click", () => {
  photoOne.style.display = "block";
  phototwo.style.display = "none";
  photothree.style.display = "none";
});

btnTwo.addEventListener("click", () => {
  photoOne.style.display = "none";
  phototwo.style.display = "block";
  photothree.style.display = "none";
});

btnThree.addEventListener("click", () => {
  photoOne.style.display = "none";
  phototwo.style.display = "none";
  photothree.style.display = "block";
});
