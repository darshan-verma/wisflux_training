// Celsius to Fahrenheit
document.getElementById('convertCtoF').addEventListener('click', function () {
    const celsius = parseFloat(document.getElementById('celsius').value);
    const resultElem = document.getElementById('resultCtoF');
  
    if (isNaN(celsius)) {
      resultElem.textContent = "Please enter a valid number for Celsius.";
      return;
    }
    const fahrenheit = (9 / 5) * celsius + 32;
    resultElem.textContent = `${celsius}°C is ${fahrenheit}°F`;
  });
  
  // Fahrenheit to Celsius
  document.getElementById('convertFtoC').addEventListener('click', function () {
    const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
    const resultElem = document.getElementById('resultFtoC');
  
    if (isNaN(fahrenheit)) {
      resultElem.textContent = "Please enter a valid number for Fahrenheit.";
      return;
    }
    const celsius = (fahrenheit - 32) * 5 / 9;
    resultElem.textContent = `${fahrenheit}°F is ${celsius}°C`;
  });