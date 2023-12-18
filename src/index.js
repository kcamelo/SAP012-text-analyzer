import analyzer from './analyzer.js';
console.log(document.getElementById("") )




const textarea = document.querySelector('[name="user-input"]');
const button = document.getElementById("reset-button");
const copyButton = document.getElementById("copy-button");

const wordCount = document.querySelector('[data-testid="word-count"]');
const characterCount = document.querySelector('[data-testid="character-count"]');
const characterNoSpacesCount = document.querySelector('[data-testid="character-no-spaces-count"]');
const wordLengthAverage = document.querySelector('[data-testid="word-length-average"]');
const numberCount = document.querySelector('[data-testid="number-count"]');
const numberSum = document.querySelector('[data-testid="number-sum"]');

textarea.addEventListener("keyup", allMetricsUpdate);
button.addEventListener("click", clearAllMetricsAndText);
copyButton.addEventListener("click", copyContent);

function clearAllMetricsAndText() {
  textarea.value = "";
  wordCount.textContent = "Word count: 0";
  characterCount.textContent = "Character count: 0";
  characterNoSpacesCount.textContent = "Character no spaces count: 0";
  numberCount.textContent = "Number: 0";
  numberSum.textContent = "Number sum: 0";
  wordLengthAverage.textContent = "Word length average: 0";
}

getAverageth