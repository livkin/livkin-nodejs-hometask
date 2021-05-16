const userService = require('../services/userService');
const errors = require('../utils/Errors');

function createUser(req, res, next) {

  if (userService.search({ email: req.body.email })) {
    throw new errors.CommonError('user with such email is exists');
  }

  try {
    res.body = userService.create(req.body);
  } catch (err) {
    throw new Errors.CommonError(err.message);
  } finally {
    next();
  }
}

function updateUser(req, res, next) {

  if (!userService.search({ id: req.params.id })) {
    throw new errors.CommonError('user with such id doesn`t exists');
  }

  try {
    res.body = userService.update(req.params.id, req.body);
  } catch (err) {
    throw new errors.CommonError(err.message);
  } finally {
    next();
  }
}

exports.createUser = createUser;
exports.updateUser = updateUser;