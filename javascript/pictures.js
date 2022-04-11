const photos = document.querySelectorAll("#photos img");

// const photo1 = document.querySelector(".one");
// const photo2 = document.querySelector(".two");
// const photo3 = document.querySelector(".three");
const buttons = document.querySelectorAll("#buttons button");
// const btn1 = document.querySelector(".btOne");
// const btn2 = document.querySelector(".btTwo");
// const btn3 = document.querySelector(".btThree");

buttons.forEach((button, index) =>
  button.addEventListener("click", () => {
    photos.forEach((photo) => (photo.style.display = "none"));
    photos[index].style.display = "block";
  })
);

// btn1.addEventListener("click", () => {
//   photo1.style.display = "block";
//   photo2.style.display = "none";
//   photo3.style.display = "none";
// });

// btn2.addEventListener("click", () => {
//   photo1.style.display = "none";
//   photo2.style.display = "block";
//   photo3.style.display = "none";
// });

// btn3.addEventListener("click", () => {
//   photo1.style.display = "none";
//   photo2.style.display = "none";
//   photo3.style.display = "block";
// });

// cambiar a sass
// btn1.addEventListener("mouseover", () => {
//   btn1.style.background = "#08A6E4";
// });

// btn1.addEventListener("mouseout", () => {
//   btn1.style.background = "#919191";
// });

// btn2.addEventListener("mouseover", () => {
//   btn2.style.background = "#08A6E4";
// });

// btn2.addEventListener("mouseout", () => {
//   btn2.style.background = "#919191";
// });

// btn3.addEventListener("mouseover", () => {
//   btn3.style.background = "#08A6E4";
// });

// btn3.addEventListener("mouseout", () => {
//   btn3.style.background = "#919191";
// });
