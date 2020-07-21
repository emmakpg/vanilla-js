const balanceEl = document.getElementById("balance");
const incomeEl = document.getElementById("money-plus");
const expenseEl = document.getElementById("money-minus");
const historyEl = document.getElementById("list");
const form = document.getElementById("form");
const textInput = document.getElementById("text");
const amountInput = document.getElementById("amount");
const addtransBtn = document.getElementById("add-transaction");

const income = {};
const expense = {};

//console.log(typeof income);

//Functions

function addTransaction(e) {
  e.preventDefault();

  if (textInput.value != "" && amountInput.value != "") {
    const transName = textInput.value;
    const amount = amountInput.value;

    //console.log(transName, amount);
    if (amount >= 0) {
      income[transName] = amount;

      //console.log(income);
    } else {
      expense[transName] = amount;
      // console.log(expense);
    }
  } else {
    alert("Kindly enter a transaction name and amount");
  }

  const totalTrans = { ...income, ...expense };

  updateHistory(totalTrans);

  //Clear inputs
  textInput.value = "";
  amountInput.value = "";
}

//Update Transaction history
function updateHistory(total) {
  historyEl.innerHTML = `${Object.keys(total).map(
    (key, index) => ` <li class="minus">
    ${key}<span>${total[key]}</span><button class="delete-btn">x</button>
  </li>`
  )};`;

  console.log(total);
}

//Event Listeners

addtransBtn.addEventListener("click", addTransaction);
