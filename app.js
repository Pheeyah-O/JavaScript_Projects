function numClick(numValue) {
  document.getElementById("showAnswer").innerText += numValue;
}

function clearScreen() {
  document.getElementById("showAnswer").innerHTML = "";
}

function equalSign() {
  let equalNum = document.getElementById("showAnswer").innerHTML;
  result = eval(equalNum);
  document.getElementById("showAnswer").innerHTML = `${result}`;
}

function backspace() {
  let backSpace = document.getElementById("showAnswer").innerHTML;
  let afterSlide = backSpace.slice(0, -1);
  document.getElementById("showAnswer").innerHTML = afterSlide;
}

function resultBtn() {
  let numberInput = document.getElementById("numberInput").value;
  let showResult = document.getElementById("showResult");

  if (numberInput % 2 === 0) {
    showResult.textContent = `${numberInput} is an Even Number`;
  } else if (numberInput % 2 === 1) {
    showResult.textContent = `${numberInput} is an Odd Number`;
  } else {
    showResult.textContent = "Enter correct Number";
  }
}
