const { user } = require('../models/user');
const validations = require('../utils/validators');

const createUserValid = (req, res, next) => {
    res.err = {
        error: false,
        message: '',
        status: 400,
    };
    const err = res.err;

    validations.haveId(req.body, err);
    validations.haveOddKeys(req.body, user, err);
    validations.haveMissingKeys(req.body, user, err);

    if (req.body.email === undefined) {
        validations.checkEmail(req.body.email, res.err);
    }
    if (req.body.phoneNumber === undefined) {
        validations.checkPhoneNumber(req.body.phoneNumber, res.err);
    }
    if (req.body.checkPassword === undefined) {
        validations.checkPassword(req.body.password, res.err);
    }
    if (err.error) {
        res.err = err;
    }

    next();
}

const updateUserValid = (req, res, next) => {
    // TODO: Implement validatior for user entity during update

    next();
}


exports.createUserValid = createUserValid;
exports.updateUserValid = updateUserValid;