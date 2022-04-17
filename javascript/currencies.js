//
const basicCurrency = document.querySelector(".basicCurrency");
const proCurrency = document.querySelector(".proCurrency");
const premiumCurrency = document.querySelector(".premiumCurrency");
const choice = document.querySelector("#choice");

let currencies = {
  dollar: 0,
  pound: 0,
  euro: 0,
};

fetch(
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/2020-11-24/currencies/usd.json"
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    console.log(data.usd.eur);
    currencies.euro = data.usd.eur;
    currencies.dollar = data.usd.usd;
    currencies.pound = data.usd.gbp;
  });

choice.addEventListener("click", () => {
  console.log("clicked");

  switch (choice.value) {
    case "eur":
      basicCurrency.textContent = `0€`;
      proCurrency.textContent = Math.floor(25 * currencies.euro) + "€";
      premiumCurrency.textContent = Math.floor(60 * currencies.euro) + "€";
      break;
    case "usd":
      basicCurrency.textContent = `0$`;
      proCurrency.textContent = "25$";
      premiumCurrency.textContent = "60$";
      break;
    case "gbp":
      basicCurrency.textContent = `0£`;
      proCurrency.textContent = Math.floor(25 * currencies.pound) + "£";
      premiumCurrency.textContent = Math.floor(60 * currencies.pound) + "£";
  }
});
