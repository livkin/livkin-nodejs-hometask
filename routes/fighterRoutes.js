const { Router } = require('express');
// const FighterService = require('../services/fighterService');
// const { responseMiddleware } = require('../middlewares/response.middleware');
const fighterManagerMiddleware = require('../middlewares/fighter.manager.middleware');
const { createFighterValid, updateFighterValid } = require('../middlewares/fighter.validation.middleware');

const router = Router();

// TODO: Implement route controllers for fighter

// GET / api / fighters
router.get('/',
  fighterManagerMiddleware.getFighterAll
);
// GET / api / fighters /: id
router.get('/:id',
  fighterManagerMiddleware.getFighterById
);
// POST / api / fighters
router.post('/',
  createFighterValid,
  fighterManagerMiddleware.createFighter
);

// PUT / api / users /: id
router.put('/:id',
  updateFighterValid,
  fighterManagerMiddleware.updateFighter
);

// DELETE / api / users /: id
router.delete('/:id',
  fighterManagerMiddleware.deleteFighter
);

module.exports = router;