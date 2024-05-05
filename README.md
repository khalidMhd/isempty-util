# isEmpty-util

A lightweight utility library to determine if a value is empty, covering strings, objects, and arrays.

## Installation

Install `isempty-util` via npm:

```bash
npm install isempty-util
 ```

## Usage

```bash
const isEmpty = require('isEmpty-util');

console.log(isEmpty('')); // true
console.log(isEmpty({})); // true
console.log(isEmpty([])); // true

console.log(isEmpty('Hello')); // false
console.log(isEmpty({ key: 'value' })); // false
console.log(isEmpty([1, 2, 3])); // false
```

## API

value (*): The value to check.
Returns true if the value is empty, otherwise false.
