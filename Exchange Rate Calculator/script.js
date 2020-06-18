const currency1 = document.getElementById("currency-one");
const currency2 = document.getElementById("currency-two");
const swap = document.getElementById("swap");
const amountCurrency1 = document.getElementById("amount-one");
const amountCurrency2 = document.getElementById("amount-two");
const ratefield = document.getElementById("rate");

//fetch exchange rates and update the DOM
function calculate() {
  const currency_one = currency1.value;
  const currency_two = currency2.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then((res) => res.json())
    .then((data) => {
      const rate = data.rates[currency_two];
      // console.log(`${currency_two}: ${rate}`);
      ratefield.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
      amountCurrency2.value = (rate * amountCurrency1.value).toFixed(2);
    });
}

//Event Listeners
currency1.addEventListener("change", calculate);
currency2.addEventListener("change", calculate);
amountCurrency1.addEventListener("input", calculate);
amountCurrency2.addEventListener("input", calculate);

swap.addEventListener("click", () => {
  temp = currency1.value;
  currency1.value = currency2.value;
  currency2.value = temp;
  calculate();
});

calculate();
