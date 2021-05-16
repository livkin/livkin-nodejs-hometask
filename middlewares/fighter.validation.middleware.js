const { fighter } = require('../models/fighter');
const validations = require('../utils/validators');
const errors = require('../utils/Errors');

const createFighterValid = (req, res, next) => {
    // TODO: Implement validatior for fighter entity during creation

    const messages = [];

    messages.push(validations.haveId(req.body));

    messages.push(validations.haveOddKeys(req.body, fighter));

    const mandatoryKeys = { ...fighter };
    delete mandatoryKeys.health;
    
    messages.push(validations.haveMissingKeys(req.body, fighter));


    messages.push(validations.checkPower(req.body.power));
    messages.push(validations.checkDefense(req.body.defense));

    if (req.body.health !== undefined) {
        messages.push(validations.checkHealth(req.body.health));
    }

    const message = messages.join('\n').trim();
    if (message !== '') {
        throw new errors.CommonError(message);
    }

    next();
}

const updateFighterValid = (req, res, next) => {
    // TODO: Implement validatior for fighter entity during update

    next();
}

exports.createFighterValid = createFighterValid;
exports.updateFighterValid = updateFighterValid;