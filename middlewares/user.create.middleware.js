const userService = require('../services/userService');

function createUser(req, res, next) {

  if (userService.search({ email: req.body.email })) {
    res.err = {
      status: 400,
      error:true,
      message: 'user with such email is exists',
    }
    next();
    return;  
  }

  try{
    
    res.body = userService.create(req.body);
  
  } catch(err) {
    res.err = {
      status: 500,
      error:true,
      message: err.message
    }
  } finally {
    next();
  }
  
}

exports.createUser = createUser;