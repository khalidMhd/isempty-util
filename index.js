// index.js

/**
 * Checks if a given value is empty.
 * @param {*} value - The value to check.
 * @returns {boolean} - True if the value is empty, otherwise false.
 */
function isEmpty(value) {
    if (value === null || value === undefined) {
        return true;
    }

    if (typeof value === 'string') {
        return value.trim() === '';
    }

    if (Array.isArray(value) || typeof value === 'object') {
        return Object.keys(value).length === 0;
    }

    return false;
}

module.exports = isEmpty;
