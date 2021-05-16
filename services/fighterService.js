const { FighterRepository } = require('../repositories/fighterRepository');

class FighterService {
    // TODO: Implement methods to work with fighters
    getAll() {
        const all = FighterRepository.getAll();
        if (!all) {
            return null;
        }
        return all;
    }

    search(search) {
        const item = FighterRepository.getOne(search);
        if (!item) {
            return null;
        }
        return item;
    }

    create(data) {
        const item = FighterRepository.create(data);
        if (!item) {
            return null;
        }
        return item;
    }

    update(id, data) {
        const item = FighterRepository.getOne({ id });
        if (!item) {
            return null;
        }
        return FighterRepository.update(id, data);
    }

    delete(id) {
        const item = FighterRepository.delete({ id });
        if (!item) {
            return null;
        }
        return item;
    }
}


module.exports = new FighterService();