const DatabaseServices = require('../../../application/interfaces/DatabaseServices');
const InMemoryStudentRepository = require('./InMemoryStudentRepository');
const Student = require('../../../entities/Student');

module.exports = class InMemoryDatabaseServices extends DatabaseServices {
    constructor() {
        super();
        this.studentRepository = new InMemoryStudentRepository();
    }

    initDatabase() {
        return new Promise((resolve, reject) => {
            try {
                this.seedData();
                resolve();
            } catch (err) {
                reject(err);
            }
        });
    }

    async seedData() {
        let sampleStudent = new Student('royi', 'benita', 'royibeni@gmail.com');

        sampleStudent = await this.studentRepository.add(sampleStudent);
        await this.studentRepository.addEnrollment(sampleStudent.id, { course: { id: 1, name: 'math' }, grade: 95 });

    }
};
