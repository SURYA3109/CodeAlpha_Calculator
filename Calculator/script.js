const display = document.getElementById("display");

function append(val) {
  if (display.innerText === "0" || display.innerText === "Error") {
    display.innerText = val;
  } else {
    display.innerText += val;
  }
}

function clearAll() {
  display.innerText = "0";
}

function clearEntry() {
  if (display.innerText.length <= 1 || display.innerText === "Error") {
    display.innerText = "0";
  } else {
    display.innerText = display.innerText.slice(0, -1);
  }
}

function calculate() {
  try {
    display.innerText = eval(display.innerText.replace(/x/g, "*"));
  } catch (err) {
    display.innerText = "Error";
  }
}


document.addEventListener("keydown", (e) => {
  const key = e.key;
  if (!isNaN(key) || "+-*/.%".includes(key)) {
    append(key);
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    clearEntry();
  } else if (key === "c" || key === "C") {
    clearAll();
  }
});
