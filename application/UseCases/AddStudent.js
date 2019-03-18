const Student = require('../../entities/Student');

module.exports = (StudentRepository, CrmServices) => {

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
            // create new student object
            const newStudent = new Student(firstName, lastName, email);
            resolve(newStudent);

        }).then((newStudent) => {
            // persist student
            return StudentRepository.add(newStudent);
        }).then((newStudent) => {
            // notify crm system
            return CrmServices.notify(newStudent);
        }).then(() => {
            return Promise.resolve('student added successfully');
        });
    }
    return {
        Execute
    };
};
