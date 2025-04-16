// 1. Reverse an array
const originalArray = [1, 2, 3, 4, 5, 6];
const reversedArray = originalArray.slice().reverse();
console.log("Original Array:", originalArray);
console.log("Reversed Array:", reversedArray);

// 2. Explain properties of the join array method via program
const joinArray = ['a', 'b', 'c', 'd'];
const defaultJoin = joinArray.join();          // "a,b,c,d"
const customJoin = joinArray.join('-');          // "a-b-c-d"
console.log("Default join:", defaultJoin);
console.log("Custom join with '-':", customJoin);

// 3. Show all the values of an array in an HTML webpage using DOM and forEach method
const valuesArray = [10, 20, 30, 40, 50];
const outputDiv = document.getElementById("output");

if (outputDiv) {
  outputDiv.innerHTML = "";
  valuesArray.forEach(value => {
    const p = document.createElement("p");
    p.textContent = value;
    outputDiv.appendChild(p);
  });
} else {
  console.warn("Element with id 'output' not found in the document.");
}

// 4. Merge two sets in JavaScript using the Set class
const set1 = new Set([1, 2, 3]);
const set2 = new Set([3, 4, 5]);
const mergedSet = new Set([...set1, ...set2]);
console.log("Merged Set:", mergedSet);
