const CrmServices = require('../../application/contracts/CrmServices');

module.exports = class UniversityCrmServices extends CrmServices {

    notify(studentDetails) {
        return Promise.resolve('external crm system was notified');
    }

};
