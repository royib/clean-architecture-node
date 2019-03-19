const Student = require('../../entities/Student');

module.exports = (StudentRepository) => {

    async function Execute(firstName, lastName, email) {
        const students = await StudentRepository.getAll();
        return new Promise((resolve, reject) => {
            resolve(students);
        });
    }

    return {
        Execute
    };
};
