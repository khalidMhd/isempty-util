# isempty-util

A lightweight utility library for JavaScript that provides functions to determine if a value is empty, covering strings, objects, and arrays.

## Installation

You can install `isempty-util` via npm:

```bash
npm install isempty-util
```

## Usage

```bash
const { isEmpty } = require('isempty-util');

// Check if a value is empty
console.log(isEmpty('')); // true
console.log(isEmpty({})); // true
console.log(isEmpty([])); // true

```
## Functions

`isEmpty(value)`

Determines if a provided value is considered empty.

- value: The value to be evaluated.
- Returns true if the value is empty; otherwise, returns false.

## Examples

```bash
const { isEmpty } = require('isempty-util');

// Test cases for isEmpty function
console.log(isEmpty('')); // Expected: true (empty string)
console.log(isEmpty({})); // Expected: true (empty object)
console.log(isEmpty([])); // Expected: true (empty array)

console.log(isEmpty('Hello')); // Expected: false (non-empty string)
console.log(isEmpty({ key: 'value' })); // Expected: false (non-empty object)
console.log(isEmpty([1, 2, 3])); // Expected: false (non-empty array)

console.log(isEmpty(null)); // Expected: true (null)
console.log(isEmpty(undefined)); // Expected: true (undefined)
console.log(isEmpty(0)); // Expected: false (number)
console.log(isEmpty(false)); // Expected: false (boolean)

```

## API

value (*): The value to check.
Returns true if the value is empty, otherwise false.


## Issue Reporting
If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
