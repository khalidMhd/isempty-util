// test.js

// Import the package
const { isEmpty } = require('../index');

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
