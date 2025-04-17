# JavaScript quiz basic level-4

## 1. What are anonymous functions in JavaScript?  
Anonymous functions are functions defined without a name, often assigned to variables or passed as arguments to other functions :contentReference[oaicite:0]{index=0}. They are useful for one‑off actions and callbacks.

**Example:**
```js
// Assigned to a variable
const greet = function(name) {
  console.log("Hello, " + name);
};
greet("Alice");

// Immediately Invoked Function Expression (IIFE)
(function() {
  console.log("This runs immediately");
})();
```
## 2. Explain strict comparison and abstract comparison in JavaScript 
° Strict comparison (===, !==) checks both value and type, avoiding type coercion, which makes its result more predictable.

° Abstract comparison (==, !=) allows type coercion according to the Abstract Equality Comparison Algorithm, which can lead to unexpected results.
```js
// Strict comparison
0 === "0";   // false
// Abstract comparison
0 == "0";    // true (string is coerced to number)
```
## 3. Difference between arrow functions and regular functions
**this binding:** Arrow functions do not create their own this; they inherit it from the surrounding scope.

**arguments object:** Arrow functions lack their own arguments object.

**Constructors:** Arrow functions cannot be used as constructors with new.

**Syntax:** Arrow functions offer a concise syntax, especially for small callbacks.
```js
// Regular function
function add(a, b) {
  return a + b;
}

// Arrow function
const multiply = (a, b) => a * b;
```
## 4. What is Hoisting in JavaScript?
Hoisting is JavaScript’s behavior of moving declarations (variables, functions, classes) to the top of their scope before execution. This means you can call a function or use a var‑declared variable before its declaration.

**Example:**
```js
console.log(x); // undefined (declaration hoisted, assignment not)
var x = 5;

sayHi();       // Works, function declaration hoisted
function sayHi() {
  console.log("Hi!");
}
```
## 5. JavaScript is a garbage‑collected language, explain how
JavaScript engines use automatic memory management via a garbage collector (GC) that tracks object reachability. When an object becomes unreachable (no references from root), GC reclaims its memory in a “mark‑and‑sweep” process.

## 6. Explain shallow copy vs deep copy in JavaScript
° **Shallow copy** duplicates only the first level of an object or array; nested objects/arrays still reference the original memory.

° **Deep copy** recursively copies all levels, producing a completely independent clone.

**Example:**
```js
// Shallow copy
const original = { a: 1, nested: { b: 2 } };
const shallow = { ...original };
shallow.nested.b = 3;
console.log(original.nested.b); // 3 (shared reference)

// Deep copy (using JSON methods)
const deep = JSON.parse(JSON.stringify(original));
deep.nested.b = 4;
console.log(original.nested.b); // 3 (independent copy)
```
## 7. What is Object.freeze?
Object.freeze(obj) freezes an object, preventing new properties from being added and existing properties from being changed or removed. In strict mode, attempting modifications throws a TypeError.

**Example:**
```js
const config = { apiUrl: "https://api.example.com" };
Object.freeze(config);
config.apiUrl = "https://evil.com"; // Fails silently or throws in strict mode
console.log(config.apiUrl);          // "https://api.example.com"
```