// 1. Calculate the average of an array of numbers.
function calculateAverage(nums) {
    // Sum up all the numbers and divide by the array length.
    const sum = nums.reduce((acc, cur) => acc + cur, 0);
    return sum / nums.length;
  }
  
  // 2. Swap two numbers by reference using an object.
  function swapNumbersByReference(obj) {
    // Swap the values of obj.a and obj.b.
    const temp = obj.a;
    obj.a = obj.b;
    obj.b = temp;
  }
  
  // 3. Generate and return the Fibonacci sequence of length n.
  function generateFibonacci(n) {
    const sequence = [];
    if (n > 0) sequence.push(0);
    if (n > 1) sequence.push(1);
    for (let i = 2; i < n; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
  }
  
  // 4. Sort an array in both ascending and descending order.
  function sortArrayBothWays(arr) {
    const ascending = arr.slice().sort((a, b) => a - b);
    const descending = arr.slice().sort((a, b) => b - a);
    return { ascending, descending };
  }
  
  // 5. Display a variable's value in an HTML element using DOM manipulation.
  function displayValueInDOM(selector, value) {
    const elem = document.querySelector(selector);
    if (elem) {
      elem.textContent = value;
    } else {
      console.error("No element found for selector: " + selector);
    }
  }
  
  