const form_sec = document.getElementById("subs");
const formu = document.getElementById("subscribe");
const closer = document.getElementById("close");
const bb = document.getElementsByTagName("body");

export const showPopUp = () => {
  if (
    !localStorage.getItem("form", "sended") &&
    !sessionStorage.getItem("form", "closed")
  ) {
    form_sec.style.transform = "translateX(0)";
  }
};

setTimeout(showPopUp, 5000);

closer.addEventListener("click", () => {
  sessionStorage.setItem("form", "closed");
  form_sec.style.transform = "translateX(-100%)";
});

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

  localStorage.setItem("form", "sended");

  formu.reset();

  setTimeout(() => {
    form_sec.style.transform = "translateX(-100%)";
  }, 2000);
});
