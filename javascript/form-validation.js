const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Submit captured");
  const naame = document.getElementById("name-value").value;
  const email = document.getElementById("email-value").value;
  const check = document.getElementById("checkbox").checked;
  const namelen = naame.length;
  const nameInput = document.getElementById("name-value");
  const emailInput = document.getElementById("email-value");
  const errors = document.getElementById("errors");

  let mailregex = /@/;
  const result = mailregex.test(email);
  console.log(result);

  if (namelen < 2 || namelen > 100) {
    nameInput.style.borderBottom = "2px solid red";
    errors.style.marginTop = "30px";
    errors.style.color = "red";
    errors.innerHTML = "Invalid name. 2-100 name length";
    return;
  } else if (namelen > 2 || namelen < 100) {
    nameInput.style.borderBottom = "1px solid #95989A";
    errors.innerHTML = " ";
  }

  if (result === false) {
    emailInput.style.borderBottom = "2px solid red";
    errors.style.marginTop = "30px";
    errors.style.color = "red";
    errors.innerHTML = "Invalid email.";
    return;
  } else if (result === true) {
    nameInput.style.borderBottom = "1px solid #95989A";
    errors.innerHTML = "";
  }

  if (!check) {
    alert("You must give consent");
    return;
  }

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      name: naame,
      email: email,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));

  setTimeout(() => {
    form.reset();
  }, 1000);
});
