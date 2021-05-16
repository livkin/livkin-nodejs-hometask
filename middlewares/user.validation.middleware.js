const { user } = require('../models/user');
const validations = require('../utils/validators');
const errors = require('../utils/Errors');

const createUserValid = (req, res, next) => {
    const messages = [];

    messages.push(validations.haveId(req.body));

    messages.push(validations.haveOddKeys(req.body, user));
    messages.push(validations.haveMissingKeys(req.body, user));

    messages.push(validations.checkEmail(req.body.email));
    messages.push(validations.checkPhoneNumber(req.body.phoneNumber));
    messages.push(validations.checkPassword(req.body.password));

    const message = messages.join('\n').trim();
    if (message !== '') {
        throw new errors.CommonError(message);
    }
    
    next();
}

const updateUserValid = (req, res, next) => {
    // TODO: Implement validatior for user entity during update
    const messages = [];
    
    messages.push(validations.haveOddKeys(req.body, user));

    if (req.body.email !== undefined) {
        messages.push(validations.checkEmail(req.body.email));
    }
    if (req.body.phoneNumber !== undefined) {
        messages.push(validations.checkPhoneNumber(req.body.phoneNumber));
    }
    if (req.body.password !== undefined) {
        messages.push(validations.checkPassword(req.body.password));
    }

    const message = messages.join('\n').trim();
    if (message !== '') {
        throw new errors.CommonError(message);
    }

    next();
}

exports.createUserValid = createUserValid;
exports.updateUserValid = updateUserValid;