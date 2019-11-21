const Validator = require('validator');
const validText = require('./valid-text');
const validPositiveNumber = require('./valid-positive-number');

module.exports = function validateUpdateUserInput(data) {
    let errors = {};

    data.username = validText(data.username) ? data.username : "";

    data.age = parseInt(data.age);
    data.height = parseInt(data.height);
    data.weight = parseInt(data.weight);

    if (!(['light', 'medium', 'hard'].includes(data.activity))) {
        errors.activity = 'That is not an activity level option!'
    }

    if (!(['5k', 'lose weight', 'Michelle Obama arms'].includes(data.goals))) {
        errors.goals = 'That is not a fitness goal option';
    }

    if (data.age < 10 || data.age > 150) {
        errors.age = 'Thats not your age!';
    }

    if (validPositiveNumber(data.height) === false) {
        errors.height = 'Please provide a valid height in inches';
    }

    if (validPositiveNumber(data.weight) === false) {
        errors.weight = 'Please provide a valid weight in pound';
    }

    if (Validator.isEmpty(data.username)) {
        errors.username = 'Please select a username';
    } else if (!Validator.isLength(data.username, { min: 3, max: 20 })) {
        errors.username = 'Username must be between 3 and 20 characters';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}