const form_sec = document.getElementById("subs");
const formu = document.getElementById("subscribe");
const email = document.getElementById("emailValue").value;
const closer = document.getElementById("close");
const bb = document.getElementsByTagName("body");

// window.addEventListener("scroll", () => {
//   let max = document.body.scrollHeight - innerHeight;
//   let percentage = (window.pageYOffset / max) * 100;
//   console.log(percentage);
//   if (percentage >= 25) {
//     form_sec.style.transform = "translateX(0)";
//   } else {
setTimeout(() => {
  form_sec.style.transform = "translateX(0)";
}, 5000);
//   }
// });

// window.addEventListener("scroll", () => {
//   let percentage = (window.pageYOffset / max) * 100;

//   //   console.log(window.pageYOffset, document.documentElement.scrollTop);
//   console.log(percentage);
// });

// setTimeout(() => {
//   console.log("timer");
//   form_sec.style.transform = "translateX(0)";
// }, 5000);

closer.addEventListener("click", () => {
  form_sec.style.transform = "translateX(-100%)";
});
