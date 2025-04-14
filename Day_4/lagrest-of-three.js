document.getElementById('findLargest').addEventListener('click', function () {
    const a = parseFloat(document.getElementById('numA').value);
    const b = parseFloat(document.getElementById('numB').value);
    const c = parseFloat(document.getElementById('numC').value);
    const resultElem = document.getElementById('resultLargest');
  
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      resultElem.textContent = "Please enter valid numbers in all fields.";
      return;
    }
    // Find the largest number
    const largest = Math.max(a, b, c);
    resultElem.textContent = `The largest number is: ${largest}`;
  });