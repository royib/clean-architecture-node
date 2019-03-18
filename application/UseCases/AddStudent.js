const Student = require('../../entities/Student');

module.exports = (StudentRepository) => {

    async function Execute(firstName, lastName, email) {
        const student = await StudentRepository.getByEmail(email);
        return new Promise((resolve, reject) => {
            // validate
            if (!firstName || !lastName || !email) {
                reject(new Error('validation failed'));
                return;
            }
            // check if student exist by email
            if (student) {
                reject(new Error('email already exist in the system'));
                return;
            }
            const newStudent = new Student(firstName, lastName, email);
            StudentRepository.add(newStudent).then((response) => {
                resolve(response);
            }, (err) => {
                reject(err);
            });
        });
    }
    return {
        Execute
    };
};
