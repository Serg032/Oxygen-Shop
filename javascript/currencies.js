const basicCurrency = document.querySelector(".basicCurrency");
const proCurrency = document.querySelector(".proCurrency");
const premiumCurrency = document.querySelector(".premiumCurrency");
const choice = document.querySelector("#choice");

console.log(choice.value);

// let dollar;
// let pound;
// let euro;

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
    console.log(`eur: ${currencies.euro}`);
    console.log(`dollar: ${currencies.dollar}`);
    console.log(`pound: ${currencies.pound}`);
  });

choice.addEventListener("click", () => {
  console.log("clicked");
});

// let money = Number((proCurrency.textContent = 25 * euro));

// switch (choice.value) {
//   case "eur":
//     basicCurrency.textContent = 0;
//     proCurrency.textContent = 25 * euro;
//     premiumCurrency.textContent = 60 * euro;
//     break;
//   case "usd":
//     basicCurrency.innerHTML = 0;
//     proCurrency.innerHTML = 25;
//     premiumCurrency.innerHTML = 60;
//     break;
//   case "gbp":
//     basicCurrency.innerHTML = 0;
//     proCurrency.innerHTML = 25 * pound;
//     premiumCurrency.innerHTML = 60 * pound;
//     break;
// }
