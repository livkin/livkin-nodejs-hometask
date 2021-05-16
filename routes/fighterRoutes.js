const { Router } = require('express');
// const FighterService = require('../services/fighterService');
// const { responseMiddleware } = require('../middlewares/response.middleware');
const fighterManagerMiddleware = require('../middlewares/fighter.manager.middleware');
const { createFighterValid, updateFighterValid } = require('../middlewares/fighter.validation.middleware');

const router = Router();

// TODO: Implement route controllers for fighter

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