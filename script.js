let currentDisplay = "0";
let resultDisplay = false;

function appendToDisplay(value) {
  const displayElement = document.getElementById("display");
 
  if (currentDisplay === "0" || resultDisplay) {
    currentDisplay = value;
  } else {
    currentDisplay += value;
  }
  resultDisplay = false;
  displayElement.value = currentDisplay;
}

function calculateResult() {
  const displayElement = document.getElementById("display");
  
  try {
    const result = eval(currentDisplay);
    currentDisplay = result.toString();
    displayElement.value = currentDisplay;
  } catch (error) {
    currentDisplay = "Error"; 
    displayElement.value = currentDisplay;
  }
  resultDisplay = true;
}
