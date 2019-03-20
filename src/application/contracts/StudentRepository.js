/* eslint-disable no-empty-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
module.exports = class StudentRepository {
    constructor() { }

    add(studentInstance) {
        return new Promise((resolve, reject) => {
            reject(new Error('not implemented'));
        });
    }

    update(studentInstance) {
        return new Promise((resolve, reject) => {
            reject(new Error('not implemented'));
        });
    }

    delete(studentInstance) {
        return new Promise((resolve, reject) => {
            reject(new Error('not implemented'));
        });
    }

    getById(StudentId) {
        return new Promise((resolve, reject) => {
            reject(new Error('not implemented'));
        });
    }

    getByEmail(StudentId) {
        return new Promise((resolve, reject) => {
            reject(new Error('not implemented'));
        });
    }

    getAll() {
        return new Promise((resolve, reject) => {
            reject(new Error('not implemented'));
        });
    }

    addEnrollment(studentInstance, enrollment) {
        return new Promise((resolve, reject) => {
            reject(new Error('not implemented'));
        });
    }
};
