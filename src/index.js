import analyzer from './analyzer.js';

const textarea = document.querySelector('[name="user-input"]'); 
const button = document.getElementById("reset-button"); 
const wordCount = document.querySelector('[data-testid="word-count"]'); 
const characterCount = document.querySelector('[data-testid="character-count"]'); 
const characterNoSpacesCount = document.querySelector('[data-testid="character-no-spaces-count"]'); 
const wordLengthAverage = document.querySelector('[data-testid="word-length-average"]'); 
const numberCount = document.querySelector('[data-testid="number-count"]'); 
const numberSum = document.querySelector('[data-testid="number-sum"]'); 

textarea.addEventListener("keyup", allMetricsUpdate); 
button.addEventListener("click", clearAllMetricsAndText); 

function clearAllMetricsAndText() {  
  textarea.value = "";
  wordCount.textContent = "Palavras: 0"; 
  characterCount.textContent = "Caracteres: 0";
  characterNoSpacesCount.textContent = "Caracteres sem espaços: 0";
  numberCount.textContent = "Números: 0";
  numberSum.textContent = "Soma Números: 0";
  wordLengthAverage.textContent = "Comprimento Médio Palavras: 0";
}

textarea.addEventListener('input', allMetricsUpdate);

function allMetricsUpdate() { 
  const text = textarea.value; 
  // Use 'value' para obter o conteúdo do textarea
  wordCount.textContent = "Palavras: " + analyzer.getWordCount(text);
  characterCount.textContent = "Caracteres: " + analyzer.getCharacterCount(text);
  characterNoSpacesCount.textContent = "Caracteres sem espaços: " + analyzer.getCharacterCountExcludingSpaces(text);
  numberCount.textContent = "Números: " + analyzer.getNumberCount(text);
  numberSum.textContent = "Soma Números: " + analyzer.getNumberSum(text);
  wordLengthAverage.textContent = "Comprimento Médio Palavras: " + analyzer.getAverageWordLength(text);
}