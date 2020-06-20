const addUserBtn = document.getElementById("add-user");
const doubleBtn = document.getElementById("double");
const showmilBtn = document.getElementById("show-millionaires");
const sortBtn = document.getElementById("sort");
const caltotalBtn = document.getElementById("calculate-wealth");
const main = document.getElementById("main");

let data = [];

async function userGenerator() {
  const res = await fetch("https://randomuser.me/api/");
  const data = await res.json();
  // console.log(data);

  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };
  addData(newUser);
}

function addData(obj) {
  data.push(obj);
  updateDOM();
}

function updateDOM(providedData = data) {
  main.innerHTML = "<h2><strong>Person</strong> Wealth</h2>";
  data.forEach((item) => {
    //console.log(item);
    const element = document.createElement("div");
    element.classList.add("person");
    element.innerHTML = `<strong>${item.name}</strong> GHC${formatMoney(
      item.money
    )}<br>`;
    main.appendChild(element);
  });
}

//function format number as currency
function formatMoney(num) {
  return num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

//Event Listeners
addUserBtn.addEventListener("click", addUser);
doubleBtn.addEventListener("click", doubleWealth);
showmilBtn.addEventListener("click", showMil);
sortBtn.addEventListener("click", sortRichest);
caltotalBtn.addEventListener("click", calTotal);

//Functions
function addUser() {
  userGenerator();
}