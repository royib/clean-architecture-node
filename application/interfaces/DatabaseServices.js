/* eslint-disable class-methods-use-this */
module.exports = class DatabaseServices {

    constructor() {
        this.studentRepository = null;
    }

    initDatabase() {
        return new Promise((resolve, reject) => {
            reject(new Error('not implemented'));
        });
    }

};
