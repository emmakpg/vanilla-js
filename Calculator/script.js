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
  fontChange();
}

function fontChange() {
  if (display.value.length > 6) {
    display.style.fontSize = "40px";
  } else {
    display.style.fontSize = "60px";
  }
}

disp = (num) => {
  switch (num) {
    case 1:
      if (display.value.length < 12) {
        display.value += "1";
      }
      fontChange();
      break;
    case 2:
      if (display.value.length < 12) {
        display.value += "2";
      }
      fontChange();
      break;
    case 3:
      if (display.value.length < 12) {
        display.value += "3";
      }
      break;
    case 4:
      if (display.value.length < 12) {
        display.value += "4";
      }
      fontChange();
      break;
    case 5:
      if (display.value.length < 12) {
        display.value += "5";
      }
      fontChange();
      break;
    case 6:
      if (display.value.length < 12) {
        display.value += "6";
      }
      fontChange();
      break;
    case 7:
      if (display.value.length < 12) {
        display.value += "7";
      }
      fontChange();
      break;
    case 8:
      if (display.value.length < 12) {
        display.value += "8";
      }
      fontChange();
      break;
    case 9:
      if (display.value.length < 12) {
        display.value += "9";
      }
      fontChange();
      break;
    case 0:
      if (display.value.length < 12) {
        display.value += "0";
      }
      fontChange();
      break;
    case ".":
      if (display.value.length < 12) {
        display.value += ".";
      }
      fontChange();
      break;
  }
};

operand = (operator) => {
  switch (operator) {
    case "+":
      display.value += "+";
      break;
    case "-":
      display.value += "-";
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

equal = () => {
  display.value = eval(display.value);
  fontChange();
};
