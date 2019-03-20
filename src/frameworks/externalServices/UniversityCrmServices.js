const CrmServices = require('../../application/contracts/CrmServices');

module.exports = class UniversityCrmServices extends CrmServices {

    notify(studentDetails) {
        return new Promise((resolve, reject) => {
            resolve('external crm system was notified');
        });
    }

};
