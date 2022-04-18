const form_sec = document.getElementById("subs");
const formu = document.getElementById("subscribe");
const closer = document.getElementById("close");
const bb = document.getElementsByTagName("body");

export const showPopUp = () => {
  form_sec.style.transform = "translateX(0)";
};

setTimeout(showPopUp, 5000);

closer.addEventListener("click", () => {
  form_sec.style.transform = "translateX(-100%)";
});

// if ((localStorage = "")) {
//   form_sec.style.transform = "scale(-100%)";
// }

formu.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.getElementById("emailValue").value;
  let regex = /@/;
  const result = regex.test(email);
  console.log(result);

  if (result === false) {
    alert("That's not an email");
    return;
  }
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      email: email,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));

  localStorage.setItem("form", 1);

  formu.reset();

  setTimeout(() => {
    form_sec.style.transform = "translateX(-100%)";
  }, 2000);
});
