document.getElementById('multiply').addEventListener('click', function() {
    calculate('multiply');
  });
  document.getElementById('divide').addEventListener('click', function() {
    calculate('divide');
  });
  
  function calculate(operation) {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var res = document.getElementById('result');
  

    if (isNaN(num1) || isNaN(num2)) {
      res.innerText = "Please enter valid numbers.";
      return;
    }
  
    if (operation === 'multiply') {
      res.innerText = "Product: " + (num1 * num2);
    } else if (operation === 'divide') {
      if (num2 === 0) {
        res.innerText = "Error: Division by zero is not allowed.";
      } else {
        res.innerText = "Quotient: " + (num1 / num2);
      }
    }
  }
  