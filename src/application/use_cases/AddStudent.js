const Student = require('../../entities/Student');

module.exports = (StudentRepository, CrmServices) => {

    async function Execute(firstName, lastName, email) {
        const student = await StudentRepository.getByEmail(email);

        // validate
        if (!firstName || !lastName || !email) {
            throw new Error('validation failed');
        }

        // check if student exist by email
        if (student) {
            throw new Error('email already exist in the system');
        }

        // create new student object
        let newStudent = new Student(firstName, lastName, email);

        // persist student
        newStudent = await StudentRepository.add(newStudent);

        // notify crm system
        await CrmServices.notify(newStudent);

        return 'student added successfully';
    }
    return {
        Execute
    };
};
