
// Import the package
const { isSupportedType } = require('../index');

// Test isSupportedType function
console.log(isSupportedType('')); // true
console.log(isSupportedType('')); // true
console.log(isSupportedType([])); // true
console.log(isSupportedType({})); // true
console.log(isSupportedType(123)); // true
console.log(isSupportedType(true)); // false
console.log(isSupportedType(null)); // false
console.log(isSupportedType(undefined)); // false
