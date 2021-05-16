const authService = require('../services/authService');
const errors = require('../utils/Errors');

function auth(req, res, next) {
  console.log('asdasdasd');
  try {
    const user = authService.login({
      email: req.body.email,
      password: req.body.password
    });
    res.body = user;
  } catch (err) {
    throw new errors.CommonError(err.message);
  } finally {
    next();
  }
};

exports.auth = auth;
