# NodeJS Basics - FAQ

## 1. What is NodeJS?
Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to run JavaScript code on the server side. It is built on Chrome's V8 JavaScript engine and enables building scalable and fast network applications.

---

## 2. What is V8 Engine?
The V8 Engine is Google's open-source JavaScript engine, written in C++, used in Google Chrome and Node.js. It compiles JavaScript directly to native machine code, making execution extremely fast.

---

## 3. What is Event Loop in NodeJS?
The Event Loop is a mechanism in Node.js that handles asynchronous callbacks. It allows Node.js to perform non-blocking I/O operations by offloading operations to the system kernel whenever possible.

---

## 4. What is the use of `tsconfig.json` file?
The `tsconfig.json` file is used in TypeScript projects to specify the root files and compiler options required to compile the project. It helps configure how TypeScript behaves during the compilation process.

---

## 5. What are the methods provided by `fs` module to manipulate files?
The `fs` (File System) module in Node.js provides both synchronous and asynchronous methods like:
- `fs.readFile`
- `fs.writeFile`
- `fs.appendFile`
- `fs.unlink`
- `fs.rename`
- `fs.mkdir`
- `fs.readdir`
- `fs.stat`

---

## 6. What is API?
An API (Application Programming Interface) is a set of rules and definitions that allow different software applications to communicate with each other.

---

## 7. What is JSON format?
JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It uses key-value pairs to represent data.

---

## 8. Why we use JSON format for API?
JSON is widely used in APIs because it is:
- Language-independent
- Lightweight and fast
- Easy to read and write
- Supported natively by JavaScript

---

## 9. What is a Framework?
A Framework is a platform or set of tools that provides a structured way to build and deploy applications. It typically includes libraries, best practices, and APIs that simplify the development process.

---

## 10. How an HTTP Communication works.
HTTP communication works as follows:
1. A client (browser) sends an HTTP request to a server.
2. The server processes the request and sends back an HTTP response.
3. The response includes data like HTML, JSON, or status codes.
4. The client receives and processes the response.

---

## 11. What is Middleware in ExpressJS?
Middleware in ExpressJS refers to functions that execute during the lifecycle of a request to the server. Middleware functions can:
- Execute any code
- Modify request and response objects
- End the request-response cycle
- Call the next middleware in the stack

Common types include:
- Built-in middleware (e.g., `express.json()`)
- Third-party middleware (e.g., `cors`)
- Custom middleware

