
function isSupportedType(value) {
    return value === null || value === undefined || typeof value === 'string' || Array.isArray(value) || typeof value === 'object' || typeof value === 'number' || typeof value === 'boolean';
}

module.exports = isSupportedType;
