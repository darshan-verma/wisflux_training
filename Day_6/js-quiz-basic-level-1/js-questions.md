# JavaScript basic Questions & Answers

1. **What is JavaScript?**  
   JavaScript is a high-level, interpreted programming language that is primarily used for web development. It allows developers to create dynamic and interactive content on websites and is an essential component of modern web applications alongside HTML and CSS.
   
```js
console.log("Hello, JavaScript!");
```
2. **What is the difference between b/w let and var?**  
   `var` is function-scoped and can be re-declared or updated within its scope. `let` is block-scoped, cannot be re-declared within the same scope, and provides better control over variable lifetime, reducing accidental bugs in code.
```js
   if (true) {
  var x = 10;
  let y = 20;
}
    console.log(y); // ReferenceError: y is not defined
    console.log(x); // 10 (accessible outside the block)
```

3. **Why do we prefer const over var?**  
   `const` is used to declare variables that should not be re-assigned after their initial value is set. It helps in maintaining immutability for variables that must remain constant, improving code clarity and reducing unintended side-effects compared to `var`.
   ```js
   const PI = 3.14159;
    PI = 3.14; // Error: Assignment to constant variable.
    ```

4. **What is the use of JavaScript in web browsers?**  
   JavaScript in web browsers is used to create interactive and dynamic web pages. It handles events, manipulates the Document Object Model (DOM), communicates with servers (AJAX), and enhances the user experience by updating content without reloading the entire page.

5. **What are Objects?**  
   Objects in JavaScript are collections of properties, where each property is a key-value pair. They are used to group related data and functionality. Objects can represent real-world entities and are fundamental to JavaScript’s prototype-based programming model.
   ```js
   const person = {
    name: "Alice",
    age: 30,
    greet: function() {
        console.log("Hello, my name is " + this.name);
         }
        };

    person.greet();  // "Hello, my name is Alice"
    ```
   

6. **What is an array and how is it different from an Object in JavaScript?**  
   An array is an ordered collection of values, indexed numerically. Arrays are useful for storing lists of items and support methods for iteration, sorting, and filtering. While arrays are technically a type of object, the key difference is that array elements are ordered and accessed by numeric index, whereas standard objects are unordered collections of key-value pairs.

    ```js
        // Array
            const fruits = ["apple", "banana", "cherry"];
            console.log(fruits[1]);  // "banana"
            // Object
            const fruitColors = { apple: "red",banana: "yellow"cherry:"red" };
            console.log(fruitColors["banana"]);  // "yellow"
    ```

7. **What is a function?**  
   A function is a block of reusable code designed to perform a particular task. In JavaScript, functions can be defined using function declarations, function expressions, or arrow functions. They allow you to encapsulate code, accept parameters, and return a value.
   ```js
        function add(a, b) {
            return a + b;
                }
            console.log(add(5, 3)); // 8
    ```

8. **How can we implement call by value and call by reference in JavaScript?**  
   JavaScript uses call by value for primitive types (numbers, strings, booleans, etc.). For objects and arrays, the reference to the memory address is passed, meaning that modifications to the object/array inside a function affect the original data. However, the reference itself is passed by value.
   ```js
        // Call by value: primitives
        function changeValue(x) {
        x = 10;
        }
        let a = 5;
        changeValue(a);
        console.log(a); // 5, since a remains unchanged

        // Call by reference: objects
        function changeProperty(obj) {
        obj.value = 10;
        }
        let myObj = { value: 5 };
        changeProperty(myObj);
        console.log(myObj.value); // 10, since the object property is modified
    ```

9. **What are the primitive data types in JavaScript?**  
   The primitive data types in JavaScript are:
   - **String**
   - **Number**
   - **Boolean**
   - **Undefined**
   - **Null**
   - **Symbol** (introduced in ES6)
   - **BigInt** (for large integers)

10. **What is DOM?**  
    The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content dynamically. The DOM treats the document as a tree structure with nodes representing elements.
    ```js 
        // Accessing an element with id "example"
        const element = document.getElementById("example");
        element.textContent = "Updated text!";
    ```

11. **Why do we need DOM?**  
    The DOM allows developers to interact with and manipulate HTML documents programmatically. This makes it possible to update the content, structure, and styles of web pages dynamically, enabling interactive user interfaces and responsive web applications.
