const { Router } = require('express');
// const UserService = require('../services/userService');
const userManagerMiddleware = require('../middlewares/user.manager.middleware ');
const { createUserValid, updateUserValid } = require('../middlewares/user.validation.middleware');
// const { responseMiddleware } = require('../middlewares/response.middleware');

const router = Router();

// TODO: Implement route controllers for user

// GET / api / users
router.get('/',
  userManagerMiddleware.getUsersAll  
);
// GET / api / users /: id
router.get('/:id',
  userManagerMiddleware.getUserById  
);
// POST / api / users
router.post('/',
  createUserValid,
  userManagerMiddleware.createUser
);

// PUT / api / users /: id
router.put('/:id',
  updateUserValid,
  userManagerMiddleware.updateUser
);

// DELETE / api / users /: id
router.delete('/:id',
  userManagerMiddleware.deleteUser
);

module.exports = router;