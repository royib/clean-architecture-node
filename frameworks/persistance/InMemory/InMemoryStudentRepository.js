/* eslint-disable no-param-reassign */
/* eslint-disable arrow-body-style */
const StudentRepository = require('../../../application/interfaces/StudentRepository');

module.exports = class InMemoryStudentRepository extends StudentRepository {

    constructor() {
        super();
        this.students = [];
        this.currentId = 1;
    }

    add(studentInstance) {
        return new Promise((resolve, reject) => {
            this.currentId = this.currentId + 1;
            studentInstance.id = this.currentId;
            this.students.push(studentInstance);
            resolve(studentInstance);
        });
    }

    update(studentInstance) {
        return new Promise((resolve, reject) => {
            const student = this.students.find(x => x.id === studentInstance.id);
            if (student) {
                Object.assign(student, { studentInstance });
                resolve(student);
            } else {
                reject(new Error('Error Occurred'));
            }
        });
    }

    delete(studentId) {
        return new Promise((resolve, reject) => {
            const studentIndex = this.students.findIndex(x => x.id === studentId);
            if (studentIndex !== -1) {
                this.students.splice(studentIndex, 1);
                resolve(true);
            } else {
                reject(new Error('Error Occurred'));
            }
        });
    }

    getById(studentId) {
        return new Promise((resolve, reject) => {
            try {
                const id = parseInt(studentId);
                const student = this.students.find(x => x.id === id);
                resolve(student);
            } catch (err) {
                reject(new Error('Error Occurred'));
            }
        });
    }

    getByEmail(studentEmail) {
        return new Promise((resolve, reject) => {
            try {
                const student = this.students.find(x => x.email === studentEmail);
                resolve(student);
            } catch (err) {
                reject(new Error('Error Occurred'));
            }
        });
    }

    getAll() {
        return new Promise((resolve, reject) => {
            resolve(this.students);
        });
    }

    addEnrollment(studentId, enrollment) {
        return new Promise((resolve, reject) => {
            try {
                const id = parseInt(studentId);
                const student = this.students.find(x => x.id === id);
                if (student) {
                    if (!student.enrollments) {
                        student.enrollments = [];
                    }
                    student.enrollments.push(enrollment);
                    resolve(student);
                } else {
                    reject(new Error('student does not exist'));
                }
            } catch (error) {
                reject(error);
            }
        });
    }
};
