# TypeScript Questions & Answers

## 1. Basic Data Types in TypeScript  
TypeScript supports both **primitive** and **non‑primitive** (object) types. Primitive types include `boolean`, `number`, `string`, `null`, `undefined`, `symbol`, and `bigint`. Non‑primitive types cover arrays, tuples, enums, and the catch‑all `any` or stricter `unknown` type :contentReference[oaicite:0]{index=0}.

```ts
// Primitive types
let isDone: boolean = false;
let age: number = 30;
let name: string = "Alice";
let big: bigint = 123n;

// Object types
let list: number[] = [1, 2, 3];
let tuple: [string, number] = ["hello", 10];
enum Color { Red, Green, Blue }
let c: Color = Color.Green;
let anything: any = { x: 0 };
```
## 2. What Is a Generic Data Type?
Generics enable the creation of reusable components that work with multiple data types while maintaining type safety. A generic is declared using angle brackets (<T>) to denote a type parameter.
```ts
function identity<T>(arg: T): T {
  return arg;
}

// Usage with explicit type
let output1 = identity<string>("hello");  // type of output1 is string

// Usage with inferred type
let output2 = identity(42);               // type of output2 is number
```
## 3. What Is Type Inference in TypeScript?
Type inference refers to the compiler’s ability to deduce types when no explicit annotation is provided. For example, when initializing a variable, TypeScript infers its type from the assigned value.
```ts
let x = 3;       // inferred as number
let y = [0, 1];  // inferred as number[]
function square(n = 10) {  // n inferred as number
  return n * n;            // return type inferred as number
}
```
## 4. Ways to Define Typing for Functions
TypeScript offers several syntaxes to type functions:

**1.Function Declaration**
```ts
function add(x: number, y: number): number {
  return x + y;
}
```

**2.Function Expression**
```ts
const multiply = function(x: number, y: number): number {
  return x * y;
};
```
**3.Arrow Function**
```ts
const divide = (x: number, y: number): number => x / y;
```
**4.Interface / Type Alias for Call Signature**
```ts
type BinOp = (x: number, y: number) => number;
const subtract: BinOp = (x, y) => x - y;
```
All these forms allow explicit parameter and return types, and TypeScript can often infer the return type when omitted.

## 5. How to Define a Generic Type for Classes
Generic classes follow a similar pattern to generic functions, placing the type parameter after the class name. This allows class members and methods to use the generic type safely.
```ts
class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
  toString(): string {
    return `${this.key} = ${this.value}`;
  }
}

// Instantiate with specific types
const pair = new KeyValuePair<number, string>(1, "one");
console.log(pair.toString()); // "1 = one"
```