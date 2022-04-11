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
  } else if (namelen > 2 || namelen < 100) {
    nameInput.style.borderBottom = "2px solid green";
    errors.innerHTML = " ";
  }

  if (result === false) {
    emailInput.style.borderBottom = "2px solid red";
    errors.style.marginTop = "30px";
    errors.style.color = "red";
    errors.innerHTML = "Invalid email.";
  } else if (result === true) {
    nameInput.style.borderBottom = "2px solid green";
    errors.innerHTML = " ";
  }

  if (!check) {
    alert("You must give consent");
    check.style.border = "2px solid red";
  }
});
