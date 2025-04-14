document.getElementById('calcDiff').addEventListener('click', function () {
    const num = parseFloat(document.getElementById('numberDiff').value);
    const resultElem = document.getElementById('resultDiff');
  
    if (isNaN(num)) {
      resultElem.textContent = "Please enter a valid number.";
      return;
    }
    const diff = Math.abs(num - 13);
    // If num is greater than 13, return double the absolute difference.
    resultElem.textContent = num > 13 ? `Result: ${2 * diff}` : `Result: ${diff}`;
  });