const display = document.querySelector("#display");

function clearDisp() {
  display.value = 0;
}

function backspace() {
  temp = display.value;
  if (temp.length > 0) {
    temp = temp.substring(0, temp.length - 1);
    display.value = temp;
  }
}

disp = (num) => {
  switch (num) {
    case 1:
      display.value += "1";
      break;
    case 2:
      display.value += "2";
      break;
    case 3:
      display.value += "3";
      break;
    case 4:
      display.value += "4";
      break;
    case 5:
      display.value += "5";
      break;
    case 6:
      display.value += "6";
      break;
    case 7:
      display.value += "7";
      break;
    case 8:
      display.value += "8";
      break;
    case 9:
      display.value += "9";
      break;
    case 0:
      display.value += "0";
      break;
    case ".":
      display.value += ".";
      break;
  }
};

operand = (operator) => {
  switch (operator) {
    case "+":
      display.value += "+";
      break;
    case "/":
      display.value += "/";
      break;
    case "*":
      display.value += "*";
      break;
    case "+/-":
      display.value += "-" + display.value;
      break;
  }
};
