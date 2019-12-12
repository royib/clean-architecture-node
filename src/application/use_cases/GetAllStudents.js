const Student = require('../../entities/Student');

module.exports = (StudentRepository) => {

    async function Execute(firstName, lastName, email) {
        return StudentRepository.getAll();
    }

    return {
        Execute
    };
};
