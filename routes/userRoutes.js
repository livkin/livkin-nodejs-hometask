const { Router } = require('express');
const UserService = require('../services/userService');
const { createUserValid, updateUserValid } = require('../middlewares/user.validation.middleware');
const { responseMiddleware } = require('../middlewares/response.middleware');

const router = Router();

// TODO: Implement route controllers for user

// GET / api / users

// GET / api / users /: id

// POST / api / users
router.post('/', 
createUserValid,
responseMiddleware
);

// PUT / api / users /: id

// DELETE / api / users /: id


module.exports = router;