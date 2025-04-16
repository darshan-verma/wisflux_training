# JavaScript Questions – Answers

1. **Why do we use functions in JavaScript?**  
   Functions encapsulate reusable blocks of code, promoting modularity, maintainability, and abstraction. They help reduce redundancy and simplify complex tasks.

   **Example:**
   ```js
   function greet(name) {
     return `Hello, ${name}!`;
   }
   console.log(greet("Alice"));
   ```

2. **What is Function Invocation?**  
   Function invocation is the process of calling or executing a function. It triggers the function's internal code to run with given arguments.
   ```js
    function sayHi() {
    console.log("Hi!");
    }
    sayHi(); // Invokes the function
    ```

3. **Does a function behave like an object in JavaScript? Prove it by an example.**  
   Yes, functions are first-class objects in JavaScript. They can have properties and methods like any other object.
   ```js
   function myFunction() {}
    myFunction.description = "I am a function and also an object!";
    console.log(myFunction.description);  // Output: I am a function and also an object!
    ```
4. **What are Events in JavaScript?**
    Events are actions or occurrences (such as clicks, key presses, or page loads) that happen in the browser. Developers use event handlers to execute code in response to these events.
    ```js
    document.getElementById("myButton").addEventListener("click", function() {
    console.log("Button was clicked!");
        });
    ```

5. **What is a string?**
    A string is a sequence of characters used to represent text in JavaScript. Strings are immutable and can be defined using single quotes, double quotes, or backticks.
    ```js
    let greeting = "Hello, World!";
    ```
6. **What is an array? Is it static or dynamic in JavaScript?** 
    An array is an ordered list of values accessed by numeric indices. In JavaScript, arrays are dynamic—they can grow or shrink in size at runtime.
    ```js
           let fruits = ["apple", "banana"];
    fruits.push("cherry"); // fruits now becomes ["apple", "banana", "cherry"]
    ```
7. **Difference between Map and Set?**    
    Map: A collection of key-value pairs with unique keys. It maintains insertion order and allows keys of any type.

    Set: A collection of unique values with no key-value pairs. It only stores individual elements and automatically ignores duplicates.
    ```js
    let myMap = new Map();
    myMap.set("a", 1);

    let mySet = new Set();
    mySet.add(1);
    mySet.add(1); // Duplicate is ignored, set contains only one value.
    ```
8. **Difference between Array and Map?**
    Array: An ordered list of values accessible via numeric indices, ideal for storing ordered data.

    Map: A collection of key-value pairs where keys can be any type, suited for associative data storage.    
    ```js
    let arr = [10, 20, 30];
    let map = new Map();
    map.set("first", 10);
    map.set("second", 20);
    ```
9. **What are array methods? List a few names.**
    Array methods are built-in functions for manipulating arrays. Common examples include:
    push() / pop()

    shift() / unshift()
    forEach()
    map(), filter(), reduce()
    slice(), splice()
    ```js
    let numbers = [1, 2, 3];
    numbers.push(4);  // Adds 4 to the end of the array
    ```
10. **In how many ways can we traverse through an array in JavaScript**  
    There are several ways to iterate over an array:

    Using a traditional for loop.
    Using the forEach() method. 
    Using the for...of loop.
    Using the for...in loop (though it's not recommended for arrays).
    Using higher-order methods like map(), filter(), etc.
    ```js
    let colors = ["red", "green", "blue"];
    colors.forEach(color => console.log(color));
    ```



    


    
