const form_sec = document.getElementById("subs");
const formu = document.getElementById("subscribe");
const email = document.getElementById("emailValue").value;
const closer = document.getElementById("close");
const bb = document.getElementsByTagName("body");

export const showPopUp = () => {
  form_sec.style.transform = "translateX(0)";
};

setTimeout(showPopUp, 5000);

closer.addEventListener("click", () => {
  form_sec.style.transform = "translateX(-100%)";
});
