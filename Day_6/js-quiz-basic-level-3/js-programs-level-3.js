// 1. Custom Implementations of Array Methods

// a. forEach: Executes a provided callback for each element in the array.
function customForEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      callback(arr[i], i, arr);
    }
  }
  
  // b. map: Creates a new array populated with the results of calling a provided function on every element.
  function customMap(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i], i, arr));
    }
    return result;
  }
  
  // c. filter: Creates a new array with all elements that pass the test implemented by the provided function.
  function customFilter(arr, callback) {
    const filtered = [];
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr)) {
        filtered.push(arr[i]);
      }
    }
    return filtered;
  }
  
  // d. reduce: Executes a reducer function on each element of the array, resulting in a single output value.
  function customReduce(arr, callback, initialValue) {
    let accumulator = initialValue === undefined ? arr[0] : initialValue;
    let startIndex = initialValue === undefined ? 1 : 0;
    for (let i = startIndex; i < arr.length; i++) {
      accumulator = callback(accumulator, arr[i], i, arr);
    }
    return accumulator;
  }
  
  // e. includes: Determines whether an array includes a certain value among its entries.
  function customIncludes(arr, value) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) {
        return true;
      }
    }
    return false;
  }
  
  // f. some: Tests whether at least one element in the array passes the test implemented by the provided function.
  function customSome(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr)) {
        return true;
      }
    }
    return false;
  }
  
  // g. every: Tests whether all elements in the array pass the test implemented by the provided function.
  function customEvery(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      if (!callback(arr[i], i, arr)) {
        return false;
      }
    }
    return true;
  }
  
  // Demonstration of custom array methods:
  const sampleArray = [1, 2, 3, 4, 5];
  
  console.log("customForEach:");
  customForEach(sampleArray, (el, idx) => console.log(`Index ${idx}: ${el}`));
  
  console.log("customMap (square each element):", customMap(sampleArray, num => num * num));
  console.log("customFilter (only even numbers):", customFilter(sampleArray, num => num % 2 === 0));
  console.log("customReduce (sum):", customReduce(sampleArray, (acc, cur) => acc + cur, 0));
  console.log("customIncludes (3 exists):", customIncludes(sampleArray, 3));
  console.log("customSome (any number > 4):", customSome(sampleArray, num => num > 4));
  console.log("customEvery (all numbers > 0):", customEvery(sampleArray, num => num > 0));
  

  // 2. Simple Array Implementation

  
  // A simple array example
  const simpleArray = [10, 20, 30, 40, 50];
  console.log("Simple Array:", simpleArray);
