const { UserRepository } = require('../repositories/userRepository');

class UserService {
    // TODO: Implement methods to work with user

    search(search) {
        const item = UserRepository.getOne(search);
        if(!item) {
            return null;
        }
        return item;
    }

    create(data) {
        const item = UserRepository.create(data);
        if(!item) {
            return null;
        }
        return item;
    }
}

module.exports = new UserService();