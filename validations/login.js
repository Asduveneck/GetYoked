const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateLoginInput(data) {
    let errors = {};

    data.username = validText(data.username) ? data.username : '';
    data.password = validText(data.password) ? data.password : '';

    if (Validator.isEmpty(data.username)) {
        errors.username = 'Username required'
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}