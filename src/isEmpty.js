/**
 * Determines if a provided value is considered empty.
 * @param {*} value - The value to be evaluated.
 * @returns {boolean} - Returns true if the value is empty; otherwise, returns false.
 * @throws {TypeError} - Throws a TypeError if the value is of an unsupported type.
 */
const isSupportedType = require('./isSupportedType');

function isEmpty(value) {
    if (!isSupportedType(value)) {
        throw new TypeError('Unsupported value type: ' + typeof value + ' with value: ' + value);
    }

    if (value === null || value === undefined || (typeof value === 'string' && value.trim() === '') || (Array.isArray(value) && value.length === 0)) {
        return true;
    }

    if (typeof value === 'object' && Object.keys(value).length === 0) {
        return true;
    }

    return false;
}

module.exports = isEmpty;
