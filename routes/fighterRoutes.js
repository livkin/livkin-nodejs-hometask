const { Router } = require('express');
// const FighterService = require('../services/fighterService');
// const { responseMiddleware } = require('../middlewares/response.middleware');
const fighterManagerMiddleware = require('../middlewares/fighter.manager.middleware');
const { createFighterValid, updateFighterValid } = require('../middlewares/fighter.validation.middleware');

const router = Router();

// TODO: Implement route controllers for fighter

// GET / api / fighters
router.get('/',
  fighterManagerMiddleware.getfighterAll
);
// GET / api / fighters /: id
router.get('/:id',
  fighterManagerMiddleware.getfighterById
);
// POST / api / fighters
router.post('/',
  createfighterValid,
  fighterManagerMiddleware.createfighter
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