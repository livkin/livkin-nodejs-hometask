const fighterService = require('../services/fighterService');
const errors = require('../utils/Errors');

function getFighterById(req, res, next) {
  try {
    res.body = fighterService.search({id: req.params.id}); 
  } catch {
    throw new errors.CommonError('can\'t get fighter by id');
  } finally {
    next();
  }
};

function getFightersAll(req, res, next) {
  try { 
    res.body = fighterService.getAll(); 
  } catch {
    throw new errors.CommonError('can\'t get all fighters');
  } finally {
    next();
  }
};

function createFighter(req, res, next) {

  if (fighterService.search({ name: req.body.name })) {
    throw new errors.CommonError('fighter with such name exists');
  }

  if (req.body.health === undefined) {
    req.body.health = 100;
  }

  try {
    res.body = fighterService.create(req.body);
  } catch (err) {
    throw new Errors.CommonError(err.message);
  } finally {
    next();
  }
}

function updateFighter(req, res, next) {

  if (!fighterService.search({ id: req.params.id })) {
    throw new errors.CommonError('fighter with such id doesn`t exists');
  }

  try {
    res.body = fighterService.update(req.params.id, req.body);
  } catch (err) {
    throw new errors.CommonError(err.message);
  } finally {
    next();
  }
}

function deleteFighter(req, res, next) {

  if (!fighterService.search({ id: req.params.id })) {
    throw new errors.CommonError('fighter with such id doesn`t exists');
  }

  try {

    const result = fighterService.delete(req.params.id);
    res.body = {result};

  } catch (err) {
    throw new errors.CommonError(err.message);
  } finally {
    next();
  }

}

exports.createFighter = createFighter;
exports.updateFighter = updateFighter;
exports.getFightersAll = getFightersAll;
exports.getFighterById = getFighterById;
exports.deleteFighter = deleteFighter;