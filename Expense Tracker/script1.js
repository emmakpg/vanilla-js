const balanceEl = document.getElementById("balance");
const incomeEl = document.getElementById("money-plus");
const expenseEl = document.getElementById("money-minus");
const historyEl = document.getElementById("list");
const form = document.getElementById("form");
const textInput = document.getElementById("text");
const amountInput = document.getElementById("amount");
const addtransBtn = document.getElementById("add-transaction");

const dummyTransactions = [
  { id: 1, text: "Flower", amount: -20 },
  { id: 2, text: "Book", amount: -30 },
  { id: 3, text: "Salary", amount: 500 },
  { id: 4, text: "Camera", amount: -100 },
];

let transactions = dummyTransactions;

//Add transaction function
function addTransaction(e) {
  e.preventDefault();

  if (textInput.value.trim() === "" || amountInput.value.trim() === "") {
    alert("Please enter text and amount");
  } else {
    const transaction = {
      id: generateID(),
      text: textInput.value.trim(),
      amount: +amountInput.value.trim(),
    };

    transactions.push(transaction);

    addTransactionDOM(transaction);
    updateAccount();
  }
}

//generate randon ID
function generateID() {
  return Math.floor(Math.random() * 10000000);
}

//Add transactions to DOM

function addTransactionDOM(transaction) {
  //get sign
  const sign = transaction.amount < 0 ? "-" : "+";

  //create element
  const item = document.createElement("li");

  //add class based on sign

  item.classList.add(transaction.amount < 0 ? "plus" : "minus");

  item.innerHTML = `
  ${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span>
  <button class="delete-btn" onclick="removeTransaction(${
    transaction.id
  })">x</button>
  `;

  historyEl.appendChild(item);
}

//delete transaction by ID
function removeTransaction(transactionID) {
  transactions = transactions.filter(
    (transaction) => transaction.id !== transactionID
  );

  init();
}

//function to update balance, income and expenses
function updateAccount() {
  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const income = amounts.filter((item) => item > 0);
  const expense = amounts.filter((item) => item < 0);
  const totalIncome = income.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const totalExpense = (
    expense.reduce((acc, item) => (acc += item), 0) * -1
  ).toFixed(2);

  //update DOM
  balanceEl.innerHTML = `GHC${total}`;
  incomeEl.innerHTML = `+GHC${totalIncome}`;
  expenseEl.innerHTML = `-GHC${totalExpense}`;
}

//Init App
function init() {
  historyEl.innerHTML = "";

  transactions.forEach(addTransactionDOM);
  updateAccount();
}

init();

//Add event listener
addtransBtn.addEventListener("click", addTransaction);
